/**
 * LifyX Web3 Utility
 *
 * Detects whether a market symbol belongs to
 * Spot or Perpetual trading.
 *
 * Examples:
 * "cbBTC_USDC" -> "spot"
 * "PERP_BTC_USDC" -> "perpetual"
 */

function getMarketType(symbol) {
  if (!symbol || typeof symbol !== "string") {
    return "unknown";
  }

  const normalized = symbol.trim().toUpperCase();

  if (normalized.startsWith("PERP_")) {
    return "perpetual";
  }

  if (normalized.includes("_")) {
    return "spot";
  }

  return "unknown";
}

export { getMarketType };
