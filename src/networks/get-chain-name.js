/**
 * LifyX Web3 Utility
 *
 * Returns the human-readable network name
 * for a supported EVM chain ID.
 */

const CHAIN_NAMES = {
  1: "Ethereum",
  42161: "Arbitrum One",
  8453: "Base",
  10: "Optimism",
  137: "Polygon",
  56: "BNB Smart Chain"
};

function getChainName(chainId) {
  const normalizedChainId = Number(chainId);

  return CHAIN_NAMES[normalizedChainId] || "Unknown Network";
}

export { getChainName };
