/**
 * LifyX Web3 Utility
 *
 * Requests wallet connection from an injected EVM wallet provider.
 */

async function requestWalletConnection() {
  if (
    typeof window === "undefined" ||
    !window.ethereum
  ) {
    return {
      success: false,
      error: "No injected wallet provider found."
    };
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    if (!accounts || accounts.length === 0) {
      return {
        success: false,
        error: "No wallet account was returned."
      };
    }

    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId"
    });

    return {
      success: true,
      address: accounts[0],
      chainId: parseInt(chainIdHex, 16)
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

export { requestWalletConnection };
