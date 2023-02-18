import User from "../mongoDB/Schema";
import bcrypt from "bcrypt";
import { ApolloError } from "apollo-server-express";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const resolvers = {
  Query: {
    user: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_: any, { email, password }: any) => {
      const isRegistered = await User.findOne({ email });

      if (isRegistered) {
        throw new ApolloError("A user with that email is already registered!");
      } else {
        try {
          const hashedPassword = await bcrypt.hash(password, 12);

          const newUser = new User({ email, hashedPassword });
          const token = sign(
            { userEmail: newUser.email },
            process.env.SECRETJWT!,
            {
              expiresIn: "24h",
            }
          );

          newUser.token = token;

          newUser.save((err) => {
            if (err) console.log(err);
          });

          return newUser;
        } catch (err) {
          console.log(err);
        }
      }
    },
    loginUser: async (
      _: any,
      { email, password, checked }: any,
      { res }: any
    ) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new ApolloError("User don't exist");
      }

      const valid = bcrypt.compareSync(password, user.hashedPassword!);
      if (!valid) {
        throw new ApolloError("Incorrect password");
      }

      const refreshToken = sign(
        { userEmail: user.email },
        process.env.SECRETJWT!,
        {
          expiresIn: "24h",
        }
      );

      res.cookie("refresh-token", refreshToken);

      return user;
    },
  },
};

export default resolvers;
