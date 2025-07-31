# Web3 Starter Template

A modern Web3 starter template built with Vite, React, TypeScript, Wagmi, and Viem. This template provides wallet connectivity and blockchain interaction capabilities out of the box.

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Modern React with hooks
- 🔷 **TypeScript** - Type safety and better DX
- 🌈 **RainbowKit** - Beautiful wallet connection UI
- 🔗 **Wagmi** - React hooks for Ethereum
- 🛠️ **Viem** - TypeScript interface for Ethereum
- 🎨 **Tailwind CSS** - Utility-first CSS framework

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your API keys:
   - `VITE_ALCHEMY_API_KEY` - Get from [Alchemy Dashboard](https://dashboard.alchemy.com/)
   - `VITE_WALLETCONNECT_PROJECT_ID` - Get from [WalletConnect Cloud](https://cloud.walletconnect.com/)

3. **Start development server:**
   ```bash
   npm run dev
   ```

## Supported Networks

This template comes pre-configured with testnet support for:

- Ethereum Sepolia
- Polygon Amoy
- Base Sepolia  
- Arbitrum Sepolia
- Optimism Sepolia

## Project Structure

```
src/
├── App.tsx          # Main app component with wallet connection
├── main.tsx         # App entry point with Web3 providers
├── wagmi.ts         # Wagmi configuration and supported chains
├── index.css        # Global styles
└── vite-env.d.ts    # Vite type definitions
```

## Building for Production

```bash
npm run build
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ALCHEMY_API_KEY` | Alchemy API key for RPC endpoints | Yes |
| `VITE_WALLETCONNECT_PROJECT_ID` | WalletConnect project ID | Yes |

## Learn More

- [Wagmi Documentation](https://wagmi.sh/)
- [Viem Documentation](https://viem.sh/)
- [RainbowKit Documentation](https://rainbowkit.com/)
- [Vite Documentation](https://vitejs.dev/)

## License

MIT
