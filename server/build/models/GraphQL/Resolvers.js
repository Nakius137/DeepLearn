"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(require("../mongoDB/Schema"));
const resolvers = {
    Query: {
        user: async () => await Schema_1.default.find(),
    },
    Mutation: {
        createUser: async (_, { email, password }) => {
            const newUser = new Schema_1.default({ email, password });
            newUser.save((err) => {
                if (err)
                    console.log(err);
            });
            return newUser;
        },
    },
};
exports.default = resolvers;
