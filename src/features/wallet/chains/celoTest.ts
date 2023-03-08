import { Network } from '../models/network/types/Network';

export const CeloTestChain: Network = {
  chainId: 44787,
  chainName: 'Alfajores Testnet',
  nativeCurrency: {
    name: 'Alfajores Celo',
    symbol: 'A-CELO',
    decimals: 18,
  },
  rpcUrls: ['https://alfajores-forno.celo-testnet.org'],
  blockExplorerUrls: ['https://alfajores-blockscout.celo-testnet.org/'],
  addressExplorerUrl: 'address',
  transactionExplorerUrl: 'tx',
  multicallAddress: '',
  isTestChain: true,
  isLocalChain: false,
};
