require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    },
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gasPrice: "auto"
    },
    mainnet: {
      url: process.env.ALCHEMY_MAINNET_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      gasPrice: "auto"
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};