/**
 * LifyX Web3 Utility
 *
 * Returns basic network information
 * for a supported EVM chain ID.
 */

const NETWORKS = {
  1: {
    name: "Ethereum",
    slug: "ethereum"
  },
  42161: {
    name: "Arbitrum One",
    slug: "arbitrum"
  },
  8453: {
    name: "Base",
    slug: "base"
  },
  10: {
    name: "Optimism",
    slug: "optimism"
  },
  137: {
    name: "Polygon",
    slug: "polygon"
  },
  56: {
    name: "BNB Smart Chain",
    slug: "bsc"
  }
};

function getNetworkByChainId(chainId) {
  const normalizedChainId = Number(chainId);

  return NETWORKS[normalizedChainId] || null;
}

export { getNetworkByChainId };
