/**
 * LifyX Web3 Utility
 *
 * Converts a numeric EVM chain ID
 * to its hexadecimal representation.
 *
 * Example:
 * 1 -> 0x1
 * 42161 -> 0xa4b1
 */

function chainIdToHex(chainId) {
  const normalizedChainId = Number(chainId);

  if (
    !Number.isInteger(normalizedChainId) ||
    normalizedChainId < 0
  ) {
    return null;
  }

  return `0x${normalizedChainId.toString(16)}`;
}

export { chainIdToHex };
