/**
 * LifyX Web3 Utility
 *
 * Returns the native currency information
 * for a supported EVM chain ID.
 */

const NATIVE_CURRENCIES = {
  1: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  42161: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  8453: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  10: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  137: {
    name: "POL",
    symbol: "POL",
    decimals: 18
  },
  56: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  }
};

function getNativeCurrency(chainId) {
  const normalizedChainId = Number(chainId);

  return NATIVE_CURRENCIES[normalizedChainId] || null;
}

export { getNativeCurrency };
