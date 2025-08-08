import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Use Alchemy RPC URLs with API keys
const SEPOLIA_RPC = process.env.ALCHEMY_API_KEY_SEPOLIA 
  ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_SEPOLIA}`
  : "";
const BASE_SEPOLIA_RPC = process.env.ALCHEMY_API_KEY_BASESEPOLIA 
  ? `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_BASESEPOLIA}`
  : "";

// Use network-specific private keys
const SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY_SEPOLIA || "";
const BASE_SEPOLIA_PRIVATE_KEY = process.env.PRIVATE_KEY_BASESEPOLIA || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC,
      accounts: SEPOLIA_PRIVATE_KEY ? [SEPOLIA_PRIVATE_KEY] : [],
    },
    baseSepolia: {
      url: BASE_SEPOLIA_RPC,
      accounts: BASE_SEPOLIA_PRIVATE_KEY ? [BASE_SEPOLIA_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY || "",
      baseSepolia: process.env.BASESCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
};

export default config;
