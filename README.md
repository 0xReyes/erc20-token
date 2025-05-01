ERC20 Token Deployment
Deploy an ERC20 token with Hardhat.

Setup

Clone and install:git clone https://github.com/YOUR_USERNAME/erc20-token.git
cd erc20-token
npm install


Configure environment:cp .env.example .env

Edit .env with ALCHEMY_SEPOLIA_URL, DEPLOYER_PRIVATE_KEY, etc.

Local Deployment
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

Testnet/Mainnet Deployment
npx hardhat run scripts/deploy.js --network sepolia

GitHub Actions

Use deploy.yml to deploy to Sepolia/mainnet.
Set ALCHEMY_SEPOLIA_URL, ALCHEMY_MAINNET_URL, DEPLOYER_PRIVATE_KEY, ETHERSCAN_API_KEY in GitHub Secrets.
Trigger in Actions tab with network and DEPLOY confirmation.

License
MIT
