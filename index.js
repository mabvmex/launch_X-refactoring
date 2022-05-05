const path = require("path");
const Reader = require('./app/lib/utils/Reader');

// const explorers = path.join( __dirname, './app/lib/utils/Reader.js', "explorer.json")
const explorers = Reader.readJsonFile("explorers.json")
console.log(explorers);