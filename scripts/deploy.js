const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  // Configuration
  const TOKEN_NAME = process.env.TOKEN_NAME || "GoldenToken"; // Fallback to default
  const TOKEN_SYMBOL = process.env.TOKEN_SYMBOL || "GLD";
  const MAX_SUPPLY = process.env.MAX_SUPPLY || 1000000;

  console.log("Deploying contract with account:", deployer.address);
  console.log("Account balance:", ethers.formatEther(await deployer.provider.getBalance(deployer.address)),"ETH");

  const contract = await ethers.getContractFactory("Token");
  const token = await contract.deploy(
    TOKEN_NAME,
    TOKEN_SYMBOL,
    MAX_SUPPLY,
    deployer.address
  );
  
  await token.waitForDeployment();
  
  console.log("Token deployed to:", await token.getAddress());
  console.log("Owner balance:", 
    ethers.formatUnits(await token.balanceOf(deployer.address), 18),
    TOKEN_SYMBOL
  );
  console.log("Contract balance:", 
    ethers.formatUnits(await token.balanceOf(token.target), 18),
    TOKEN_SYMBOL
  );
}

main().catch(error => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});