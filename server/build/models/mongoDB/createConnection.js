"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const createConnection = async () => {
    const options = {
        dbName: "DeepLearn",
        keepAlive: true,
    };
    try {
        await (0, mongoose_1.connect)(process.env.MONGO_URL, options);
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = createConnection;
