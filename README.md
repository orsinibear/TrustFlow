# Transparent Charity Tracker (TCT)

A transparent blockchain-based charity tracking platform built on Base. Track donations, milestones, and fund releases with full transparency on-chain.

## 🎯 Project Overview

Transparent Charity Tracker is a decentralized application (dApp) that enables transparent charity project management on the blockchain. NGOs can create projects with milestones, donors can contribute ETH or ERC20 tokens, and milestone fund releases require donor voting approval.

### Key Features

- **Transparent Project Management**: All projects, donations, and milestones are recorded on-chain
- **Multi-Token Support**: Donate with ETH or ERC20 tokens (e.g., USDC)
- **Milestone-Based Funding**: Projects are broken down into milestones that require donor approval
- **Voting System**: Donors can vote on milestone fund releases based on their contribution weight
- **NGO Dashboard**: Verified NGOs can manage their projects and release funds
- **Real-Time Updates**: React Query for efficient data fetching and caching

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Web3 wallet (MetaMask, WalletConnect, etc.)
- Base Sepolia testnet ETH (for testing)
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tct
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your configuration:
- `NEXT_PUBLIC_APP_URL`: Your application URL
- `NEXT_PUBLIC_CHAIN_ID`: Chain ID (84532 for Base Sepolia, 8453 for Base Mainnet)
- `NEXT_PUBLIC_RPC_URL`: RPC endpoint URL
- `NEXT_PUBLIC_CHARITY_TRACKER_ADDRESS`: Deployed contract address
- `NEXT_PUBLIC_USDC_ADDRESS`: USDC token address (if using USDC)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
tct/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── project/           # Project-related pages
│   └── ngo/               # NGO dashboard
├── components/            # React components
│   ├── donation/         # Donation-related components
│   ├── project/          # Project-related components
│   ├── ui/               # Reusable UI components
│   └── web3/             # Web3 integration components
├── hooks/                 # Custom React hooks
│   ├── useProject.ts     # Project data hooks
│   ├── useDonation.ts    # Donation hooks
│   ├── useVoting.ts     # Voting hooks
│   └── useNGO.ts        # NGO verification hooks
├── lib/                   # Utility libraries
│   ├── contract.ts       # Contract configuration
│   ├── wagmi.ts          # Wagmi configuration
│   ├── utils.ts          # Utility functions
│   ├── errors.ts         # Error parsing utilities
│   └── validation.ts    # Form validation utilities
├── stores/                # Zustand state management
│   └── uiStore.ts        # UI state (modals, etc.)
├── types/                 # TypeScript type definitions
│   └── contract.ts       # Contract types
├── public/                # Static assets
└── contract/              # Smart contract (Foundry)
```

## 🛠️ Development

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Web3**: Wagmi + Viem
- **State Management**: 
  - React Query (server state)
  - Zustand (client state)
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Notifications**: React Hot Toast

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js config
- No `any` types - use proper interfaces and types
- Component props explicitly typed
- Hooks with explicit return types

## 🎨 Design System

### Color Palette

- **Deep Blue** (#003366): Primary background, security and trust
- **Emerald Green** (#2ECC71): Success, positive impact, main accent
- **Bitcoin Orange** (#F7931A): Secondary accent, innovation, blockchain link
- **Slate Grey** (#333333): Text/background for high contrast
- **Electric Purple** (#673AB7): Futuristic feel, tech-savvy dApp nature
- **Charity Red** (#E74C3C): Urgent CTAs, error messages, high-priority alerts

## 📝 Smart Contract

The smart contract is located in the `contract/` directory and uses Foundry for development and testing.

### Contract Addresses

**Base Sepolia (Testnet)**:
- Tracker: See `.env.local` or deployment files

**Base Mainnet**:
- Tracker: See `.env.local` or deployment files

### Contract Functions

- `createProject()`: Create a new charity project
- `donateETH()`: Donate ETH to a project
- `donateERC20()`: Donate ERC20 tokens to a project
- `voteOnMilestone()`: Vote on a milestone fund release
- `releaseFunds()`: Release funds for an approved milestone
- `getProject()`: Get project details
- `getMilestone()`: Get milestone details

See `contract/docs/` for detailed contract documentation.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Run `npm run build`
- Deploy to production

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_APP_URL`: Your production URL
- `NEXT_PUBLIC_CHAIN_ID`: 8453 (Base Mainnet)
- `NEXT_PUBLIC_RPC_URL`: Base Mainnet RPC URL
- `NEXT_PUBLIC_CHARITY_TRACKER_ADDRESS`: Production contract address
- `NEXT_PUBLIC_USDC_ADDRESS`: Production USDC address

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run start
```

3. Deploy the `.next` folder to your hosting platform

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Test Coverage

```bash
npm run test:coverage
```

### Test Structure

- `__tests__/components/`: Component unit tests
- `__tests__/hooks/`: Hook unit tests
- `__tests__/integration/`: Integration tests

## 🔒 Security

- Smart contract has been audited (see `contract/docs/AUDIT_NOTES.md`)
- Input validation on all forms
- Error handling with user-friendly messages
- Type-safe contract interactions
- No sensitive data stored client-side

## 📚 Documentation

- [Frontend Development Guide](./docs/guide.md)
- [Implementation Steps](./docs/implementationSteps.md)
- [Contract Documentation](./contract/docs/)
- [Architecture](./contract/docs/ARCHITECTURE.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built on [Base](https://base.org)
- Smart contract uses [OpenZeppelin](https://openzeppelin.com) contracts
- UI components inspired by [Headless UI](https://headlessui.com)

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Built with ❤️ for transparent charity tracking on the blockchain**
