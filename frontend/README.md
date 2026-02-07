# Secure File Storage - Frontend

A blockchain-based document management system with wallet connection functionality.

## Features

- 🔐 Web3 wallet connection (MetaMask, Coinbase Wallet, Rainbow, etc.)
- 🌐 Connected to Sepolia Testnet
- ⚛️ React + Vite for fast development
- 🎨 Tailwind CSS for styling
- 🔗 Thirdweb SDK for blockchain integration

## Network Configuration

The app is configured to connect to the **Sepolia Testnet**:

- **Chain ID**: 11155111
- **Currency**: SepoliaETH
- **Block Explorer**: https://sepolia.etherscan.io/
- **RPC**: Sepolia via Infura

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure Thirdweb:**
   - Go to [thirdweb.com/dashboard](https://thirdweb.com/dashboard)
   - Create a new project or use an existing one
   - Copy your Client ID
   - Create a `.env` file in the frontend directory:
     ```bash
     cp .env.example .env
     ```
   - Add your Client ID to `.env`:
     ```
     VITE_THIRDWEB_CLIENT_ID=your_actual_client_id
     ```

3. **Configure Infura for Sepolia Network:**
   - Go to [infura.io](https://infura.io) and create an account
   - Create a new API key
   - Add your Infura API key to `.env`:
     ```
     VITE_INFURA_API_KEY=your_infura_api_key
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Wallet Connection

The app supports multiple wallet providers:

- MetaMask
- Coinbase Wallet
- Rainbow
- Rabby
- Zerion

Users can connect their wallet to interact with the blockchain-based document storage system.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
