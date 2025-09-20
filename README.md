# Web3 Wallet

A modern, secure web-based cryptocurrency wallet that supports both Ethereum and Solana blockchains. Built with React and Vite for optimal performance and developer experience.

## Features

- 🔐 Secure wallet creation and management
- 💰 Support for multiple cryptocurrencies:
  - Ethereum (ETH)
  - Solana (SOL)
- 🔑 HD Wallet implementation with BIP39 mnemonic phrases
- ⚡ Fast and responsive UI built with React
- 🛠️ Modern development stack with Vite

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/aizen2006/eth-bit-wallet.git
cd eth-bit-wallet
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server with hot module replacement.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [ethers.js](https://docs.ethers.org/v6/) - Ethereum Web3 Library
- [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/) - Solana Web3 Library
- [BIP39](https://github.com/bitcoinjs/bip39) - Mnemonic phrase generation
- [ed25519-hd-key](https://github.com/alepop/ed25519-hd-key) - HD Key derivation

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ETHWallet.jsx
│   │   └── SolanaWallet.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Security

This wallet is for educational purposes. Always be cautious when handling cryptocurrency and never share your private keys or mnemonic phrases.
