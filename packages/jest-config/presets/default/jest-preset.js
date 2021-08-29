module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/lib/"],
  transform: { "\\.[jt]sx?$": "ts-jest" }
}
