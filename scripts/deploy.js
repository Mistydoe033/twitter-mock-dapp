const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // Deploy Profile contract first
  const ProfileContract = await ethers.getContractFactory("Profile");
  const profileContract = await ProfileContract.deploy(); // ✅ Awaiting deploy() correctly
  await profileContract.waitForDeployment(); // ✅ Fix here
  console.log(
    `Profile Contract deployed to: ${await profileContract.getAddress()}`
  );

  // Deploy Twitter contract with Profile contract address
  const TwitterContract = await ethers.getContractFactory("Twitter");
  const twitterContract = await TwitterContract.deploy(
    await profileContract.getAddress()
  ); // ✅ Pass correct address
  await twitterContract.waitForDeployment(); // ✅ Fix here
  console.log(
    `Twitter Contract deployed to: ${await twitterContract.getAddress()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
