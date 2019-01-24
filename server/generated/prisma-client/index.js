"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Game",
    embedded: false
  },
  {
    name: "RoleType",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "gameRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/tick-toc/tick-toc/dev`
});
exports.prisma = new exports.Prisma();
