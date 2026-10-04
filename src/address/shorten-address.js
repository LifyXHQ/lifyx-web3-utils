/**
 * LifyX Web3 Utility
 *
 * Shortens a wallet address for UI display.
 *
 * Example:
 * 0x1234567890abcdef1234567890abcdef12345678
 * becomes
 * 0x1234...5678
 */

function shortenAddress(address, startLength = 6, endLength = 4) {
  if (!address || typeof address !== "string") {
    return "";
  }

  if (address.length <= startLength + endLength) {
    return address;
  }

  const start = address.slice(0, startLength);
  const end = address.slice(-endLength);

  return `${start}...${end}`;
}

export { shortenAddress };
