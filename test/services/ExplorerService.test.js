
describe("Unit test for 'ExplorerService' ", () => {
  test('1.- Read the Json file from ExplorerService file', () => {
    

    const Reader = require('./../../app/lib/utils/Reader');
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers[0].mission).toBe("ajolonauta");
  });
})