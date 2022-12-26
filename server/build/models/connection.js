"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionToDB = async () => {
    try {
        //@ts-ignore
        const connection = mongoose_1.default.connect(process.env.MONGO_URL, {
            //@ts-ignore
            useNewUrlParser: true,
        });
        console.log("MongoDB is working");
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = connectionToDB;
