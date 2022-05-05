const fs = require("fs");

const Reader = require('./../../app/lib/utils/Reader');
// ./app/lib/utils/explorers.json');

describe("Unit Test for Reader Class", () => {
  test('1.- Access the "explorers.json" file and read its properties', () => {
    const rawData = fs.readFileSync('./app/lib/utils/explorers.json');
    const explorersData = JSON.parse(rawData);

    expect(explorersData[0].mission).toBe("node");
  });
});
