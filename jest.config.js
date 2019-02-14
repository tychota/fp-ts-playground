module.exports = {
  setupFilesAfterEnv: ["jest-extended", "./setupTest.ts"],
  moduleDirectories: ["./node_modules", "./src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
