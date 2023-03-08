import { Network } from '../models/network/types/Network';

export const CeloChain: Network = {
  chainId: 42220,
  chainName: 'Celo',
  nativeCurrency: {
    name: 'CELO',
    symbol: 'CELO',
    decimals: 18,
  },
  rpcUrls: ['https://forno.celo.org'],
  blockExplorerUrls: ['https://explorer.celo.org'],
  addressExplorerUrl: 'address',
  transactionExplorerUrl: 'tx',
  multicallAddress: '',
  isTestChain: false,
  isLocalChain: false,
};
