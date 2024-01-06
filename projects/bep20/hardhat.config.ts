import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "dotenv/config";

const sepolia: NetworkUserConfig = {
  url: "https://rpc.sepolia.org/",
  chainId: 11155111,
  accounts: [process.env.KEY!],
};

const config: HardhatUserConfig = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    testnet: sepolia,
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: false,
  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
};

export default config;