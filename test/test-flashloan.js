const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FlashLoan", function () {
  it("Should execute operation correctly", async function () {
    const FlashLoan = await ethers.getContractFactory("FlashLoan");
    const flashLoan = await FlashLoan.deploy();
    await flashLoan.deployed();

    const result = await flashLoan.executeOperation(
      asset,
      amount,
      premium,
      initiator,
      params
    );
    expect(result).to.equal(true);
  });
});
