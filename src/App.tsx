import React from 'react';
import { Web3Provider } from './components/Web3Provider';
import { ConnectWallet } from './components/ConnectWallet';
import { ContractInteraction } from './components/ContractInteraction';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Separator } from './components/ui/separator';

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8 px-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Web3 DApp</h1>
              <p className="text-muted-foreground">
                Interact with smart contracts on the blockchain
              </p>
            </div>
            <ConnectWallet />
          </div>

          <Separator className="mb-8" />

          {/* Main Content */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {/* Contract Interaction */}
            <div className="lg:col-span-2">
              <ContractInteraction />
            </div>

            {/* Info Cards */}
            <Card>
              <CardHeader>
                <CardTitle>About This DApp</CardTitle>
                <CardDescription>
                  Simple storage contract demonstration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a Web3 decentralized application built with React, Wagmi, and RainbowKit. 
                  It demonstrates basic smart contract interaction including reading and writing data 
                  to the blockchain.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>
                  What you can do with this DApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Connect your Web3 wallet</li>
                  <li>• Read data from smart contracts</li>
                  <li>• Write data to smart contracts</li>
                  <li>• Switch between different networks</li>
                  <li>• View transaction history</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Web3Provider>
  );
}

export default App;
