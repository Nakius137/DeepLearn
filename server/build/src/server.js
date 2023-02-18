"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const server_1 = require("@apollo/server");
const fs_1 = require("fs");
const Resolvers_1 = __importDefault(require("../models/GraphQL/Resolvers"));
const createConnection_1 = __importDefault(require("../models/mongoDB/createConnection"));
const standalone_1 = require("@apollo/server/standalone");
dotenv.config();
const main = async () => {
    const typeDefs = (0, fs_1.readFileSync)("C:\\Users\\nakiu\\Desktop\\Pulpit\\Programowanie\\DeepLearn\\server\\models\\GraphQL\\schema.graphql", {
        encoding: "utf-8",
    });
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers: Resolvers_1.default,
    });
    (0, createConnection_1.default)();
    try {
        const { url } = await (0, standalone_1.startStandaloneServer)(server, {
            listen: { port: 4000 },
        });
        console.log(`🚀 Server ready at ${url}`);
    }
    catch (err) {
        console.log(err);
    }
};
main();
