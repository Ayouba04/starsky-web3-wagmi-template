import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Lemon!");
  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  console.log("Greeter deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
