import { AvalancheChain } from './chains/avalanche';
import { AvalancheTestChain } from './chains/avalancheTest';
import { BinanceSmartChain } from './chains/bsc';
import { BSCTestChain } from './chains/bscTest';
/* Add Cadena Celo y CeloTest */
import { CeloChain } from './chains/celo';
import { CeloTestChain } from './chains/celoTest';
/*****************************/
import { EthereumMainnetChain } from './chains/ethereum';
import { GanacheChain } from './chains/ganache';
import { GoerliTestChain } from './chains/goerliTest';
import { HardhatChain } from './chains/hardhat';
import { PolygonChain } from './chains/polygon';
import { PolygonMumbaiChain } from './chains/polygonMumbai';
import { Network } from './models/network/types/Network';

export const SUPPORTED_NETWORKS: Network[] = [
  CeloChain,
  CeloTestChain,
  AvalancheChain,
  BinanceSmartChain,
  PolygonChain,
  EthereumMainnetChain,
  AvalancheTestChain,
  BSCTestChain,
  PolygonMumbaiChain,
  GoerliTestChain,
  GanacheChain,
  HardhatChain,
];
//export const DEFAULT_NETWORK = AvalancheChain;
export const DEFAULT_NETWORK = CeloTestChain;
export const SIGN_TIMEOUT_IN_SEC = 60;
export const SLOW_DOWN_IN_MS = 900;
