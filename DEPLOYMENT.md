# 🚀 Smart Contract Deployment Guide

This guide explains how to deploy smart contracts using the integrated deployment feature.

## 🔧 Setup

### 1. Environment Variables

Add these to your main project's `.env.local` file:

```bash
# Sepolia Testnet
PRIVATE_KEY_SEPOLIA=0x...
ALCHEMY_API_KEY_SEPOLIA=your_alchemy_key

# Base Sepolia Testnet  
PRIVATE_KEY_BASESEPOLIA=0x...
ALCHEMY_API_KEY_BASESEPOLIA=your_alchemy_key
```

### 2. Get Test ETH

- **Sepolia**: [Sepolia Faucet](https://sepoliafaucet.com/)
- **Base Sepolia**: [Base Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)

## 🎯 Deployment Methods

### Method 1: One-Click Deploy (Recommended)

1. **Scaffold Web3 project** - Ask AI to create a Web3 app
2. **Click Deploy button** - Appears in chat interface
3. **Select network** - Sepolia or Base Sepolia
4. **Watch deployment** - Real-time logs and progress
5. **Get contract address** - Automatic success notification

### Method 2: Terminal Commands

```bash
# Test setup
npm run test-setup

# Compile contracts
npm run compile

# Deploy to Sepolia
npm run deploy:sepolia

# Deploy to Base Sepolia
npm run deploy:base
```

## 📋 Deployment Process

1. **Validation** ✅
   - Checks hardhat.config.ts exists
   - Validates deploy script
   - Verifies environment variables

2. **Compilation** 🔨
   - Compiles Solidity contracts
   - Generates ABI and bytecode

3. **Deployment** 🚀
   - Connects to network
   - Deploys contract with constructor args
   - Waits for transaction confirmation

4. **Verification** ✅
   - Tests contract functionality
   - Returns contract address
   - Shows transaction hash and gas usage

## 🔍 Troubleshooting

### Common Issues

**"Missing environment variables"**
- Add `PRIVATE_KEY_SEPOLIA` and `ALCHEMY_API_KEY_SEPOLIA` to `.env.local`

**"hardhat.config.ts not found"**
- Ensure you're in a Web3 project (has contracts/ folder)

**"Deployment failed"**
- Check you have test ETH in your wallet
- Verify network is not congested
- Check Alchemy API key is valid

**"ESM module error"**
- Template includes NODE_OPTIONS fix automatically
- Ensure `"type": "module"` in package.json

### Debug Steps

1. **Check setup**: `npm run test-setup`
2. **Compile first**: `npm run compile`
3. **Check logs**: Deployment shows detailed progress
4. **Verify network**: Ensure correct testnet selected

## 🌐 Network Information

### Sepolia Testnet
- **Chain ID**: 11155111
- **RPC**: `https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY`
- **Explorer**: [sepolia.etherscan.io](https://sepolia.etherscan.io)

### Base Sepolia
- **Chain ID**: 84532
- **RPC**: `https://base-sepolia.g.alchemy.com/v2/YOUR_KEY`
- **Explorer**: [sepolia.basescan.org](https://sepolia.basescan.org)

## 📚 Next Steps

After successful deployment:

1. **Copy contract address** - Use in your frontend
2. **Verify on explorer** - Check contract on block explorer
3. **Test interactions** - Call contract functions
4. **Update frontend** - Connect wagmi to deployed contract

## 🎉 Success!

Your smart contract is now live on the blockchain! 

The deployment feature provides:
- ✅ Real-time deployment logs
- ✅ Automatic error handling
- ✅ Contract address extraction
- ✅ Explorer links
- ✅ Gas usage reporting
