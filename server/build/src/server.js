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
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const express4_1 = require("@apollo/server/express4");
const dotenv = __importStar(require("dotenv"));
const server_1 = require("@apollo/server");
const TypeDefs_1 = __importDefault(require("../models/GraphQL/TypeDefs"));
const Resolvers_1 = __importDefault(require("../models/GraphQL/Resolvers"));
const createConnection_1 = __importDefault(require("../models/mongoDB/createConnection"));
const http_1 = __importDefault(require("http"));
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
dotenv.config();
const main = async () => {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new server_1.ApolloServer({
        typeDefs: TypeDefs_1.default,
        resolvers: Resolvers_1.default,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        //@ts-ignore
        context: ({ req, res }) => ({ req, res }),
    });
    (0, createConnection_1.default)();
    try {
        await server.start();
        app.use("/graphql", (0, cors_1.default)(), (0, express_1.json)(), (0, express4_1.expressMiddleware)(server, {}));
        await new Promise(() => httpServer.listen({ port: 4000 }));
        console.log(`🚀 Server ready at http://localhost:4000/`);
    }
    catch (err) {
        console.log(err);
    }
};
main();
