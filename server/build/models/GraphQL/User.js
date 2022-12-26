"use strict";
// import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
// import client from "../../mongoDB/Connection";
// import UserDB from "../../mongoDB/model";
// export const CREATE_USER = {
//   type: new GraphQLList(UserType),
//   args: {
//     _id: { type: GraphQLID },
//     email: { type: GraphQLString },
//     password: { type: GraphQLString },
//   },
//   resolve(args: any) {
//     const database = client.db("DeepLearn");
//     const collection = database.collection("Users");
//     const { _id, email, password } = args;
//     const user = new UserDB({
//       _id,
//       email,
//       password,
//     });
//     return user;
//   },
// };
// const addUser = async (req, res) => {
//   const { _id, email, password } = req.body;
//   const database = client.db("DeepLearn");
//   const collection = database.collection("Users");
//   const user = new UserDB({
//     _id,
//     email,
//     password,
//   });
// };
