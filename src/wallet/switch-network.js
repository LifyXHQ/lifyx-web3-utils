/**
 * LifyX Web3 Utility
 *
 * Requests a network switch from an injected EVM wallet provider.
 */

function toHexChainId(chainId) {
  const normalizedChainId = Number(chainId);

  if (
    !Number.isInteger(normalizedChainId) ||
    normalizedChainId <= 0
  ) {
    return null;
  }

  return `0x${normalizedChainId.toString(16)}`;
}

async function switchNetwork(chainId) {
  if (
    typeof window === "undefined" ||
    !window.ethereum
  ) {
    return {
      success: false,
      error: "No injected wallet provider found."
    };
  }

  const chainIdHex = toHexChainId(chainId);

  if (!chainIdHex) {
    return {
      success: false,
      error: "Invalid chain ID."
    };
  }

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: chainIdHex
        }
      ]
    });

    return {
      success: true,
      chainId: Number(chainId)
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
}

export { switchNetwork };
