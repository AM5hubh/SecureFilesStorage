import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb/chains";

// Create thirdweb client
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

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>🔒 Secure File Storage</h1>
          <span className="navbar-subtitle">
            Blockchain Document Management
          </span>
        </div>

        <div className="navbar-actions">
          <div className="network-badge">
            <span className="network-indicator"></span>
            Sepolia Testnet
          </div>

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
      </div>
    </nav>
  );
}

export default Navbar;
