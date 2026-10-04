/**
 * LifyX Web3 Utility
 *
 * Returns the infrastructure provider
 * associated with a LifyX market type or symbol.
 *
 * Examples:
 * "cbBTC_USDC" -> "KalqiX"
 * "PERP_BTC_USDC" -> "Orderly"
 * "spot" -> "KalqiX"
 * "perpetual" -> "Orderly"
 */

function getMarketProvider(value) {
  if (!value || typeof value !== "string") {
    return null;
  }

  const normalized = value.trim().toUpperCase();

  if (
    normalized === "PERPETUAL" ||
    normalized.startsWith("PERP_")
  ) {
    return "Orderly";
  }

  if (
    normalized === "SPOT" ||
    normalized.includes("_")
  ) {
    return "KalqiX";
  }

  return null;
}

export { getMarketProvider };
