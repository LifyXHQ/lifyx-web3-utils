# LifyX Wallet Utilities

Reusable wallet utilities for Web3 applications across the LifyX ecosystem.

## Overview

This directory contains lightweight helpers for interacting with injected EVM wallet providers.

These utilities are designed to support common wallet connection and network workflows used across LifyX applications.

## Available Utilities

### Get Connected Wallet

`get-connected-wallet.js`

Returns basic information about the currently connected wallet when an injected EVM provider is available.

Returned information includes:

- Wallet address
- Chain ID

The utility does not trigger a wallet connection request.

### Request Wallet Connection

`request-wallet-connection.js`

Requests wallet access through an injected EVM wallet provider.

The utility uses:

`eth_requestAccounts`

and returns:

- Connection status
- Wallet address
- Chain ID
- Error information when applicable

### Switch Network

`switch-network.js`

Requests a network switch through an injected EVM wallet provider.

The utility uses:

`wallet_switchEthereumChain`

and automatically converts numeric chain IDs into hexadecimal format before submitting the request.

## Typical Usage

These utilities can support:

- Connect Wallet buttons
- Wallet session detection
- Account interfaces
- Chain detection
- Network switching
- Web3 onboarding
- LifyX trading interfaces

## Provider Requirements

These utilities expect an injected EVM-compatible provider exposed through:

`window.ethereum`

Compatible environments can include browser wallets and other providers that implement standard Ethereum provider methods.

## Security

These utilities never request:

- Private keys
- Seed phrases
- Wallet passwords
- API secrets

Wallet connection approval and network switching are handled by the user's wallet provider.

Never request or store a user's seed phrase or private key.

## Related Utilities

Address utilities:

`../address/`

Network utilities:

`../networks/`

## Developer Resources

Documentation:

https://github.com/LifyXHQ/lifyx-docs

API Examples:

https://github.com/LifyXHQ/lifyx-api-examples

Changelog:

https://github.com/LifyXHQ/lifyx-changelog

## Official Links

Website: https://lifyx.exchange

Trading Platform: https://app.lifyx.exchange

GitHub: https://github.com/LifyXHQ

Support: support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
