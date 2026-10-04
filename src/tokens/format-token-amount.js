/**
 * LifyX Web3 Utility
 *
 * Formats a raw token amount using token decimals.
 *
 * Example:
 * 1000000 with 6 decimals -> "1"
 * 123450000 with 6 decimals -> "123.45"
 */

function formatTokenAmount(value, decimals = 18) {
  if (
    value === null ||
    value === undefined ||
    decimals < 0 ||
    !Number.isInteger(Number(decimals))
  ) {
    return null;
  }

  try {
    const rawValue = BigInt(value);
    const tokenDecimals = Number(decimals);

    const divisor = 10n ** BigInt(tokenDecimals);

    const whole = rawValue / divisor;
    const fraction = rawValue % divisor;

    if (fraction === 0n) {
      return whole.toString();
    }

    const fractionString = fraction
      .toString()
      .padStart(tokenDecimals, "0")
      .replace(/0+$/, "");

    return `${whole.toString()}.${fractionString}`;
  } catch (error) {
    return null;
  }
}

export { formatTokenAmount };
