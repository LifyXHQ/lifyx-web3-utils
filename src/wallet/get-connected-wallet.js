/**
 * LifyX Web3 Utility
 *
 * Returns basic information about the currently connected
 * EVM wallet when an injected wallet provider is available.
 */

async function getConnectedWallet() {
  if (
    typeof window === "undefined" ||
    !window.ethereum
  ) {
    return null;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts"
    });

    if (!accounts || accounts.length === 0) {
      return null;
    }

    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId"
    });

    return {
      address: accounts[0],
      chainId: parseInt(chainIdHex, 16)
    };
  } catch (error) {
    console.error(
      "Unable to retrieve connected wallet information:"
    );
    console.error(error.message);

    return null;
  }
}

export { getConnectedWallet };
