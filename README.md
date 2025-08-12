# Web3 Wagmi Template

A modern Web3 application template with smart contract deployment capabilities, built with React, Vite, Wagmi, and Hardhat.

## Features

- ⚡ **Vite + React** - Fast development with hot reload
- 🔗 **Wagmi + RainbowKit** - Easy wallet connection and Web3 interactions
- 📝 **Smart Contracts** - Solidity contracts with Hardhat
- 🚀 **One-Click Deploy** - Integrated deployment to Sepolia and Base Sepolia
- 🎨 **Tailwind CSS** - Modern styling
- 📱 **Responsive Design** - Works on all devices

## Quick Start

### 1. Environment Setup

Copy `.env.example` to `.env` and fill in your values:

```bash
# Sepolia Testnet
PRIVATE_KEY_SEPOLIA=0x...
ALCHEMY_API_KEY_SEPOLIA=your_alchemy_key

# Base Sepolia Testnet  
PRIVATE_KEY_BASESEPOLIA=0x...
ALCHEMY_API_KEY_BASESEPOLIA=your_alchemy_key
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Compile Contracts

```bash
npm run compile
```

### 4. Deploy Smart Contract

```bash
# Deploy to Sepolia
npm run hardhat:deploy

# Deploy to Base Sepolia
npm run hardhat:deploy:base
```

### 5. Start Development Server

```bash
npm run dev
```

## Smart Contract

The template includes a simple `Greeter` contract located in `contracts/Greeter.sol`:

- **Constructor**: Sets initial greeting message
- **greet()**: Returns current greeting
- **setGreeting()**: Updates greeting message
- **Events**: Emits `GreetingChanged` when greeting is updated

## Deployment Networks

- **Sepolia Testnet**: Ethereum testnet
- **Base Sepolia**: Base L2 testnet

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run compile` - Compile smart contracts
- `npm run hardhat:deploy` - Deploy to Sepolia
- `npm run hardhat:deploy:base` - Deploy to Base Sepolia
- `npm run hardhat:verify` - Verify contract on Etherscan

## Project Structure

```
├── contracts/          # Solidity smart contracts
├── scripts/            # Deployment scripts
├── src/                # React frontend source
├── hardhat.config.ts   # Hardhat configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Getting Test ETH

- **Sepolia**: [Sepolia Faucet](https://sepoliafaucet.com/)
- **Base Sepolia**: [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)

## Block Explorers

- **Sepolia**: [https://sepolia.etherscan.io](https://sepolia.etherscan.io)
- **Base Sepolia**: [https://sepolia.basescan.org](https://sepolia.basescan.org)
