"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    _id: Number,
    email: {
        type: String,
        unique: true,
    },
    password: String,
});
const UserDB = (0, mongoose_1.model)("userdb", schema);
exports.default = UserDB;
