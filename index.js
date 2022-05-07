const Reader = require('./app/lib/utils/Reader');
const ExplorerService = require('./app/lib/services/ExplorerService');

const explorers = Reader.readJsonFile("explorers.json")
// console.log(explorers);

const mission = 'node'


const inMission = ExplorerService.filterByMission(explorers, mission);
console.log(`1.- Los explorer de la mision ${mission.toUpperCase()} son: `);
console.log(inMission);
console.log(`=============================================\n`);

const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
console.log(`2.- La cantidad de explorers participantes en la mision ${mission.toUpperCase()} es: ${cantidad}`);
console.log('=============================================\n');

const explorersName = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
console.log(`3.- Los UserNames de GitHub de explorers de la mision ${mission.toUpperCase()} son:`);
console.log(explorersName);
console.log('=============================================\n');
