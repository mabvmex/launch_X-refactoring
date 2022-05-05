const fs = require("fs");

class Reader {

  static readJsonFile(path) {
    //(`${__dirname}/explorers.json`);
    const rawData = fs.readFileSync(path);
    return JSON.parse(rawData);
  }

}

// console.log(Reader.readJsonFile("./app/lib/utils/explorers.json"));

module.exports = Reader;