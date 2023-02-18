"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(require("../mongoDB/Schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const apollo_server_express_1 = require("apollo-server-express");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const resolvers = {
    Query: {
        user: async () => await Schema_1.default.find(),
    },
    Mutation: {
        createUser: async (_, { email, password }) => {
            const isRegistered = await Schema_1.default.findOne({ email });
            if (isRegistered) {
                throw new apollo_server_express_1.ApolloError("A user with that email is already registered!");
            }
            else {
                try {
                    const hashedPassword = await bcrypt_1.default.hash(password, 12);
                    const newUser = new Schema_1.default({ email, hashedPassword });
                    const token = (0, jsonwebtoken_1.sign)({ userEmail: newUser.email }, process.env.SECRETJWT, {
                        expiresIn: "24h",
                    });
                    newUser.token = token;
                    newUser.save((err) => {
                        if (err)
                            console.log(err);
                    });
                    return newUser;
                }
                catch (err) {
                    console.log(err);
                }
            }
        },
        loginUser: async (_, { email, password, checked }, { res }) => {
            // tutaj robisz JWT i brcypta
            const user = await Schema_1.default.findOne({ where: { email } });
            if (!user) {
                throw new apollo_server_express_1.ApolloError("User don't exist");
            }
            const valid = bcrypt_1.default.compareSync(password, user.hashedPassword);
            if (!valid) {
                throw new apollo_server_express_1.ApolloError("Incorrect password");
            }
            const refreshToken = (0, jsonwebtoken_1.sign)({ userEmail: user.email }, process.env.SECRETJWT, {
                expiresIn: "24h",
            });
            res.cookie("refresh-token", refreshToken);
            return user;
        },
    },
};
exports.default = resolvers;
