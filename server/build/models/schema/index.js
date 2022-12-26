"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Mutations/User");
const User_2 = require("./Queries/User");
const Query = new graphql_1.GraphQLObjectType({
    name: "Query",
    fields: {
        getAllUsers: User_2.GET_ALL_USERS,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: User_1.CREATE_USER,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
