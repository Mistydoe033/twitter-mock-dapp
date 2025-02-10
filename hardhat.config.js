// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { SEPOLIA_API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0", // supports your contract's pragma solidity ^0.8.0;
      },
      {
        version: "0.8.20", // supports the OpenZeppelin contracts' ^0.8.20 range
      },
    ],
  },
  networks: {
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
