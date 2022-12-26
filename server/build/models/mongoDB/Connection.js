"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
//@ts-ignore
const client = new mongodb_1.MongoClient(process.env.MONGO_URL);
const connectionToDB = async () => {
    try {
        const database = client.db("sample_mflix");
        const movies = database.collection("movies");
        const query = { title: "Back to the Future" };
        const movie = await movies.findOne(query);
        console.log(movie);
    }
    finally {
        await client.close();
    }
};
connectionToDB().catch(console.dir);
exports.default = connectionToDB;
