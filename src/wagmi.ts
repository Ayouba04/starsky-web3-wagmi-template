import { createConfig, http, cookieStorage, createStorage } from 'wagmi';
import { 
  sepolia, 
  polygonAmoy,
  baseSepolia,
  arbitrumSepolia,
  optimismSepolia
} from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';

// Supported chains for the template
export const supportedChains = [
  sepolia,
  polygonAmoy,
  baseSepolia,
  arbitrumSepolia,
  optimismSepolia
] as const;

export function getWagmiConfig() {
  // Get environment variables with fallbacks
  const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo';
  const alchemyApiKey = import.meta.env.VITE_ALCHEMY_API_KEY || 'demo';
  
  // Custom RPC URLs using Alchemy
  const customRpcUrls = {
    [sepolia.id]: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
    [polygonAmoy.id]: `https://polygon-amoy.g.alchemy.com/v2/${alchemyApiKey}`,
    [baseSepolia.id]: `https://base-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
    [arbitrumSepolia.id]: `https://arb-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
    [optimismSepolia.id]: `https://opt-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
  };
  
  return createConfig({
    chains: supportedChains,
    transports: Object.fromEntries(
      supportedChains.map((chain) => [
        chain.id, 
        http(customRpcUrls[chain.id as keyof typeof customRpcUrls] || chain.rpcUrls.default.http[0])
      ])
    ),
    connectors: [
      injected(),
      metaMask(),
      walletConnect({
        projectId: walletConnectProjectId,
      }),
    ],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
  });
}
