const Reader = require("../../../app/lib/utils/Reader");
const explorers = Reader.readJsonFile('explorer.json')

  class ExplorerService {
    static filterByMission(explorer, mission) {
      const explorersInNode = explorers.filter(
        (explorer) => explorer.mision == "node"
      );
      return explorersInNode;
    }

    static getAmountOfExploreresByMission(explorers, mission) {
      const explorersInNodeToGetUsernames = explorers.filter(
        (explorer) => explorer.mission == "node"
      );
      return explorersInNodeToGetUsernames;
    }

    static getExplorersUserNameByMission(explorers, mission) {
      const explorersInNode = explorersInNodeToGetUsernames.map(
        (explorer) => explorer.githubusername
      );
      return explorersInNode;
    }
  };

ExplorerService.filterByMission();

module.exports = ExplorerService;