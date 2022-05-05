const fs = require("fs");

class Reader {

  static readJsonFile(path) {
    const rawData = fs.readFileSync(path); //(`${__dirname}/explorers.json`);
    return JSON.parse(rawData);
  }

}

console.log(Reader.readJsonFile("./app/lib/utils/explorers.json"));
module.exports = Reader;