// import { useState } from 'react';
import { createThirdwebClient } from "thirdweb";
import {
  ConnectButton,
  useActiveAccount,
  useActiveWallet,
} from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb/chains";

// Create thirdweb client - Replace with your actual client ID from thirdweb dashboard
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "YOUR_CLIENT_ID_HERE",
});

// Define Sepolia testnet chain
const sepoliaChain = defineChain({
  id: 11155111,
  name: "Sepolia",
  rpc: `https://sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY || ""}`,
  nativeCurrency: {
    name: "Sepolia ETH",
    symbol: "SepoliaETH",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
    },
  ],
  testnet: true,
});

// Define wallet options
const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

function WalletConnect() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  console.log("Active Account:", account);
  console.log("Active Wallet:", wallet);
  const handleDisconnect = async () => {
    if (wallet) {
      await wallet.disconnect();
    }
  };

  return (
    <div className="wallet-connect-container">
      {!account ? (
        <div className="connect-section">
          <h2>Connect Your Wallet</h2>
          <p>
            Connect your wallet to interact with the document storage system
          </p>
          <ConnectButton
            client={client}
            wallets={wallets}
            chain={sepoliaChain}
            connectModal={{
              size: "wide",
              title: "Connect Wallet",
              showThirdwebBranding: false,
            }}
          />
        </div>
      ) : (
        <div className="connected-section">
          <div className="wallet-info">
            <h3>Wallet Connected</h3>
            <p className="network-info">Network: Sepolia Testnet</p>
            <p className="wallet-address">
              Address: {account.address.slice(0, 6)}...
              {account.address.slice(-4)}
            </p>
            <button onClick={handleDisconnect} className="disconnect-btn">
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletConnect;
