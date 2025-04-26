const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Validate required environment variables
  if (!process.env.CONTRACT_ADDRESS) {
    throw new Error("Error: Missing CONTRACT_ADDRESS in .env file");
  }
  if (!process.env.MINT_AMOUNT) {
    throw new Error("Error: Missing MINT_AMOUNT in .env file");
  }

  const [signer] = await ethers.getSigners();
  const recipient = process.env.MINT_RECIPIENT || signer.address;
  const amount = ethers.parseUnits(process.env.MINT_AMOUNT, 18);

  console.log(`Minting ${process.env.MINT_AMOUNT} tokens to address: ${recipient}`);

  // Connect to deployed contract
  const token = await ethers.getContractAt("Token", process.env.CONTRACT_ADDRESS);
  console.log(`Connected to token contract at: ${await token.getAddress()}`);

  // Execute mint transaction
  console.log("Sending mint transaction...");
  const tx = await token.mint(recipient, amount);
  console.log(`Transaction submitted with hash: ${tx.hash}`);

  // Wait for confirmation
  await tx.wait();
  console.log("Mint transaction confirmed");

  // Verify new balance
  const newBalance = await token.balanceOf(recipient);
  console.log(`New token balance for recipient: ${ethers.formatUnits(newBalance, 18)}`);
}

main().catch(error => {
  console.error("Script failed:", error);
  process.exitCode = 1;
});