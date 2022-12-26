import express, { json } from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import * as dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import typeDefs from "../models/GraphQL/TypeDefs";
import resolvers from "../models/GraphQL/Resolvers";
import createConnection from "../models/mongoDB/createConnection";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

dotenv.config();

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  createConnection();

  try {
    await server.start();
    app.use("/graphql", cors(), json(), expressMiddleware(server, {}));
    await new Promise(() => httpServer.listen({ port: 4000 }));
    console.log(`🚀 Server ready at http://localhost:4000/`);
  } catch (err) {
    console.log(err);
  }
};

main();
