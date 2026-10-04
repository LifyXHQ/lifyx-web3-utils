/**
 * LifyX Web3 Utility
 *
 * Converts a human-readable token amount
 * into its raw integer representation.
 *
 * Example:
 * "1" with 6 decimals -> "1000000"
 * "1.25" with 6 decimals -> "1250000"
 */

function parseTokenAmount(value, decimals = 18) {
  if (
    value === null ||
    value === undefined ||
    decimals < 0 ||
    !Number.isInteger(Number(decimals))
  ) {
    return null;
  }

  const normalizedValue = String(value).trim();

  if (!/^\d+(\.\d+)?$/.test(normalizedValue)) {
    return null;
  }

  const tokenDecimals = Number(decimals);
  const [wholePart, fractionPart = ""] = normalizedValue.split(".");

  if (fractionPart.length > tokenDecimals) {
    return null;
  }

  const paddedFraction = fractionPart.padEnd(tokenDecimals, "0");

  try {
    const whole = BigInt(wholePart) * (10n ** BigInt(tokenDecimals));
    const fraction = paddedFraction
      ? BigInt(paddedFraction)
      : 0n;

    return (whole + fraction).toString();
  } catch (error) {
    return null;
  }
}

export { parseTokenAmount };
