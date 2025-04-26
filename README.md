# ERC20 Token Deployment System

[![Hardhat](https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg)](https://hardhat.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Testing](#testing)
- [Workflows](#workflows)
- [Security](#security)
- [License](#license)

## Quick Start

### Prerequisites
- Node.js v18+
- Git

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/erc20-token.git
cd erc20-token
npm install
cp .env.example .env
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```