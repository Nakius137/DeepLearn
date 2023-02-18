"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: "./models/GraphQL/schema.graphql",
    generates: {
        "src/generated/graphql.ts": {
            plugins: ["typescript", "typescript-resolvers"],
        },
    },
};
exports.default = config;
