require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Validate required environment variables
const requiredEnvVars = [
  "ALCHEMY_SEPOLIA_URL",
  "ALCHEMY_MAINNET_URL",
  "DEPLOYER_PRIVATE_KEY",
  "ETHERSCAN_API_KEY"
];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});

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
      gasPrice: "auto",
      gas: 3000000
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
