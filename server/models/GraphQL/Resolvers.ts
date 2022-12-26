import User from "../mongoDB/Schema";

const resolvers = {
  Query: {
    user: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_: any, { email, password }: any) => {
      const newUser = new User({ email, password });
      newUser.save((err) => {
        if (err) console.log(err);
      });
      return newUser;
    },
  },
};

export default resolvers;
