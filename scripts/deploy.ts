import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Starting smart contract deployment...");
  console.log("Network:", (await ethers.provider.getNetwork()).name);
  
  // Get the contract factory
  console.log("📝 Getting contract factory...");
  const Greeter = await ethers.getContractFactory("Greeter");
  
  // Deploy the contract
  console.log("⚡ Deploying Greeter contract...");
  const greeter = await Greeter.deploy("Hello, Lemon! 🍋");
  
  // Wait for deployment to be mined
  console.log("⏳ Waiting for deployment transaction to be mined...");
  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  const deploymentTx = greeter.deploymentTransaction();
  
  console.log("\n✅ Deployment successful!");
  console.log("📍 Contract address:", address);
  console.log("🔗 Transaction hash:", deploymentTx?.hash);
  console.log("⛽ Gas used:", deploymentTx?.gasLimit?.toString());
  
  // Verify the deployment by calling the contract
  console.log("\n🔍 Verifying deployment...");
  const greeting = await greeter.greet();
  console.log("📢 Initial greeting:", greeting);
  
  console.log("\n🎉 Deployment completed successfully!");
  console.log("Contract deployed to:", address);
}

main().catch((error) => {
  console.error("\n❌ Deployment failed:");
  console.error(error);
  process.exitCode = 1;
});
