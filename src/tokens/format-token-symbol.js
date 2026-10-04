/**
 * LifyX Web3 Utility
 *
 * Normalizes a token symbol for display and comparison.
 *
 * Example:
 * " usdc " -> "USDC"
 * "eth" -> "ETH"
 */

function formatTokenSymbol(symbol) {
  if (!symbol || typeof symbol !== "string") {
    return "";
  }

  return symbol.trim().toUpperCase();
}

export { formatTokenSymbol };
