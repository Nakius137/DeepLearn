import * as dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { readFileSync } from "fs";
import resolvers from "../models/GraphQL/Resolvers";
import createConnection from "../models/mongoDB/createConnection";
import { startStandaloneServer } from "@apollo/server/standalone";

dotenv.config();

const main = async () => {
  const typeDefs = readFileSync(
    "C:\\Users\\nakiu\\Desktop\\Pulpit\\Programowanie\\DeepLearn\\server\\models\\GraphQL\\schema.graphql",
    {
      encoding: "utf-8",
    }
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  createConnection();

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀 Server ready at ${url}`);
  } catch (err) {
    console.log(err);
  }
};

main();
