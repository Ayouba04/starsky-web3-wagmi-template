import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

function App() {
  const { address, isConnected } = useAccount()

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-[#090909] dark:to-[#141414] flex items-center justify-center p-6">
      <section className="w-full max-w-2xl bg-white dark:bg-[#1d1d1d] rounded-3xl shadow-xl px-10 py-12 text-center border border-gray-100 dark:border-gray-800">
        {/* Logo / Icon */}
        <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-600/10 text-indigo-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M12 2 1 21h22L12 2Zm0 3.84 6.93 11.98H5.07L12 5.84Z" />
          </svg>
        </div>
        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Web3 Vite + React Starter
        </h1>
        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          A modern boilerplate with <strong>Vite</strong>, <strong>React</strong>, and full&nbsp;Web3 tooling
          powered by <strong>Wagmi</strong>, <strong>Viem</strong>, and&nbsp;<strong>RainbowKit</strong>.
          Connect your wallet and start building&nbsp;dApps in seconds.
        </p>

        {/* Connect Wallet */}
        <div className="flex items-center justify-center mb-6">
          <ConnectButton />
        </div>

        {/* Connection Status */}
        {isConnected && (
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-400/40 rounded-full px-4 py-2 text-sm text-green-700 dark:text-green-300 mb-8">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            Connected: {address?.slice(0, 6)}…{address?.slice(-4)}
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Wagmi', 'Viem', 'RainbowKit'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 backdrop-blur-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
