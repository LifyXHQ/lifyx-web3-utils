/**
 * LifyX Web3 Utility
 *
 * Normalizes market symbols used across
 * LifyX Spot and Perpetual trading interfaces.
 *
 * Examples:
 * "cbBTC_USDC" -> "cbBTC/USDC"
 * "PERP_BTC_USDC" -> "BTC/USDC"
 */

function formatMarketSymbol(symbol) {
  if (!symbol || typeof symbol !== "string") {
    return "";
  }

  const normalized = symbol.trim();

  if (normalized.startsWith("PERP_")) {
    const parts = normalized.replace("PERP_", "").split("_");

    if (parts.length >= 2) {
      return `${parts[0]}/${parts[1]}`;
    }
  }

  const parts = normalized.split("_");

  if (parts.length >= 2) {
    return `${parts[0]}/${parts[1]}`;
  }

  return normalized;
}

export { formatMarketSymbol };
