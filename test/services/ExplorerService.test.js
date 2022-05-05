
describe("Unit test for 'ExplorerService' ", () => {
  test('1.- Read the Json file from ExplorerService file', () => {
    
    const Reader = require("./app/lib/utils/");
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorersData[0].mission).toBe("node");
  });
})