const Reader = require('./app/lib/utils/Reader');
const ExplorerService = require('./app/lib/services/ExplorerService');

const explorers = Reader.readJsonFile("explorers.json")
// console.log(explorers);

const mission = 'java'

const inMission = ExplorerService.filterBygitHubUserName(explorers, mission);
console.log(inMission);

const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
console.log(`La cantidad de explorers participantes en la mision es: ${cantidad}`);

const explorersName = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
console.log(explorersName);
