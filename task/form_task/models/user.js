const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const User = sequelize.define("KTT", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: DataTypes.STRING,
  name: DataTypes.STRING,
  role: DataTypes.STRING,
  email: DataTypes.STRING,
  mobile: DataTypes.STRING,
  branches: DataTypes.STRING,
  status: DataTypes.STRING,
});

module.exports = User;