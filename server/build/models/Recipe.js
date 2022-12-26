"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipeSchema = new mongoose_1.Schema({
    _id: Number,
    email: String,
    password: String,
});
exports.default = recipeSchema;
