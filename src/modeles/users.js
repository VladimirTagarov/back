const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const dataPath = path.join(__dirname, "../data/users.json");
  return fs.readFileSync(dataPath);
};

module.exports = getUsers;
