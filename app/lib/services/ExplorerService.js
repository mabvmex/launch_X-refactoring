class ExplorerService {
  static filterBygitHubUserName(explorers, mission) {
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode;
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersInNodeToGetUsernames = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNodeToGetUsernames.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNodeGithubUsername = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    const usernames = explorersInNodeGithubUsername.map(
      (explorersInNodeGithubUsername) =>
        explorersInNodeGithubUsername.githubUsername
    );
    // return explorersInNodeGithubUsername/* [0].githubUsername; */
    return usernames;
  }
}

module.exports = ExplorerService;
