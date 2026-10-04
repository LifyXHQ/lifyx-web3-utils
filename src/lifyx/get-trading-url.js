/**
 * LifyX Web3 Utility
 *
 * Generates a LifyX trading URL for Spot or Perpetual markets.
 *
 * Examples:
 * "cbBTC_USDC" -> Spot trading URL
 * "PERP_BTC_USDC" -> Perpetual trading URL
 */

const BASE_URL = "https://app.lifyx.exchange";

function getTradingUrl(symbol, language = "en") {
  if (!symbol || typeof symbol !== "string") {
    return "";
  }

  const normalizedSymbol = symbol.trim();

  if (!normalizedSymbol) {
    return "";
  }

  const normalizedLanguage =
    typeof language === "string" && language.trim()
      ? language.trim().toLowerCase()
      : "en";

  return `${BASE_URL}/${normalizedLanguage}/trade/${encodeURIComponent(
    normalizedSymbol
  )}`;
}

export { getTradingUrl };
