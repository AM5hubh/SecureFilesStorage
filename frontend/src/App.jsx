import "./App.css";
import Navbar from "./components/Navbar";
import { useActiveAccount } from "thirdweb/react";

function App() {
  const account = useActiveAccount();

  return (
    <div className="app-container">
      <Navbar />

      <main className="app-main">
        {account ? (
          <div className="dashboard-content">
            <div className="welcome-card">
              <h2>Welcome to Secure File Storage</h2>
              <p className="wallet-address">
                Connected: {account.address.slice(0, 6)}...
                {account.address.slice(-4)}
              </p>
              <p className="description">
                Your decentralized document management system is ready. Upload,
                manage, and track your documents securely on the blockchain.
              </p>
            </div>

            <div className="actions-grid">
              <div className="action-card">
                <h3>📤 Upload Document</h3>
                <p>Store your files securely on the blockchain</p>
                <button className="action-btn">Upload</button>
              </div>

              <div className="action-card">
                <h3>📁 My Documents</h3>
                <p>View and manage your stored documents</p>
                <button className="action-btn">View Files</button>
              </div>

              <div className="action-card">
                <h3>📜 Audit Trail</h3>
                <p>Track document history and changes</p>
                <button className="action-btn">View History</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="welcome-screen">
            <div className="welcome-content">
              <h2>Welcome to Secure File Storage</h2>
              <p>
                Connect your wallet to get started with secure, blockchain-based
                document management.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🔐</span>
                  <h3>Secure Storage</h3>
                  <p>
                    Store documents on blockchain with cryptographic security
                  </p>
                </div>
                <div className="feature">
                  <span className="feature-icon">📝</span>
                  <h3>Audit Trail</h3>
                  <p>Complete history of document access and modifications</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌐</span>
                  <h3>Decentralized</h3>
                  <p>No single point of failure, fully decentralized storage</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
