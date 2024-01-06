import { ethers, network } from "hardhat";

const currentNetwork = network.name;

async function main() {

  if (!process.env.KEY) {
    throw new Error("Missing private key");
  }

  console.log("Deploying to network:", currentNetwork);
  console.log("Deploying Token...");

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  console.log("Coin deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

