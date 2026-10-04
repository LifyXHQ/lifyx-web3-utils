/**
 * LifyX Web3 Utility
 *
 * Validates the basic format of an EVM wallet address.
 *
 * Example:
 * 0x1234567890abcdef1234567890abcdef12345678
 */

function isValidEvmAddress(address) {
  if (!address || typeof address !== "string") {
    return false;
  }

  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export { isValidEvmAddress };
