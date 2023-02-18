"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
async function hashPassword(unhasedpassword) {
    try {
        const salt = await bcrypt_1.default.genSalt(12);
        const hashedPassword = bcrypt_1.default.hash(unhasedpassword, salt);
        return hashedPassword;
    }
    catch (_a) {
        throw Error;
    }
}
exports.default = hashPassword;
