/**
 * LifyX Web3 Utility
 *
 * Checks whether a chain ID is supported
 * by the current LifyX Web3 utility configuration.
 */

const SUPPORTED_CHAIN_IDS = [
  1,      // Ethereum
  42161,  // Arbitrum One
  8453,   // Base
  10,     // Optimism
  137,    // Polygon
  56      // BNB Smart Chain
];

function isSupportedNetwork(chainId) {
  const normalizedChainId = Number(chainId);

  return SUPPORTED_CHAIN_IDS.includes(normalizedChainId);
}

export { isSupportedNetwork };
