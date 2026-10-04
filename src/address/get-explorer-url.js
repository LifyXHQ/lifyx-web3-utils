/**
 * LifyX Web3 Utility
 *
 * Generates a block explorer URL
 * for a wallet address or transaction hash.
 */

const EXPLORERS = {
  ethereum: "https://etherscan.io",
  arbitrum: "https://arbiscan.io",
  base: "https://basescan.org",
  optimism: "https://optimistic.etherscan.io",
  polygon: "https://polygonscan.com",
  bsc: "https://bscscan.com"
};

function getExplorerUrl(network, value, type = "address") {
  if (!network || !value) {
    return "";
  }

  const explorer = EXPLORERS[network.toLowerCase()];

  if (!explorer) {
    return "";
  }

  if (type === "tx") {
    return `${explorer}/tx/${value}`;
  }

  return `${explorer}/address/${value}`;
}

export { getExplorerUrl };
