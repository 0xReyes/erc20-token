const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  let token, owner, user1;
  const TOKEN_NAME = "GoldenToken";
  const TOKEN_SYMBOL = "GLD";
  const MAX_SUPPLY = 1000000;
  const HALF_SUPPLY = ethers.parseUnits((MAX_SUPPLY / 2).toString(), 18);

  beforeEach(async () => {
    [owner, user1] = await ethers.getSigners();
    
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy(
      TOKEN_NAME,
      TOKEN_SYMBOL,
      MAX_SUPPLY,
      owner.address
    );
    
    await token.waitForDeployment();
  });

  it("Should have correct initial supply", async () => {
    expect(await token.totalSupply()).to.equal(ethers.parseUnits(MAX_SUPPLY.toString(), 18));
  });

  it("Should allocate 50% to owner", async () => {
    expect(await token.balanceOf(owner.address)).to.equal(HALF_SUPPLY);
  });

  it("Should lock 50% in contract", async () => {
    expect(await token.balanceOf(token.target)).to.equal(HALF_SUPPLY);
  });
});