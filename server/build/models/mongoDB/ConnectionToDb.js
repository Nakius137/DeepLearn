"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectionToDb = async () => {
    const options = {
        dbName: "DeepLearn",
        keepAlive: true,
    };
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL, options);
    }
    catch (err) {
        console.log(err);
    }
    // const nig = new User({ email: "4343@wp.pl", password: "123" });
    // nig.save((err) => {
    //   if (err) console.log(err);
    // });
    // const nig = await User.find();
    // console.log(nig);
};
exports.default = ConnectionToDb;
