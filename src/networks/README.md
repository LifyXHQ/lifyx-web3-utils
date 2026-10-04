# LifyX Network Utilities

Reusable network utilities for EVM-compatible chains used across the LifyX ecosystem.

## Overview

This directory contains lightweight helpers for identifying supported networks, reading chain information and formatting chain IDs for Web3 integrations.

## Available Utilities

### Chain ID to Hex

`chain-id-to-hex.js`

Converts a numeric chain ID into hexadecimal format.

Example:

`1 -> 0x1`

`42161 -> 0xa4b1`

### Get Chain Name

`get-chain-name.js`

Returns the human-readable network name for a supported chain ID.

Example:

`1 -> Ethereum`

`42161 -> Arbitrum One`

### Get Native Currency

`get-native-currency.js`

Returns native currency information for a supported EVM network.

Returned information includes:

- Currency name
- Symbol
- Decimals

Example:

Ethereum:

`ETH`

BNB Smart Chain:

`BNB`

Polygon:

`POL`

### Get Network by Chain ID

`get-network-by-chain-id.js`

Returns basic network information for a supported chain ID.

Example response:

`{ name: "Ethereum", slug: "ethereum" }`

### Supported Network Check

`is-supported-network.js`

Checks whether a chain ID is included in the current LifyX Web3 network configuration.

Returns:

`true`

or:

`false`

## Supported Networks

Current utility configuration includes:

- Ethereum
- Arbitrum One
- Base
- Optimism
- Polygon
- BNB Smart Chain

## Usage

These utilities are designed for:

- Wallet connection flows
- Network detection
- Chain validation
- Network switching workflows
- Explorer integrations
- Web3 interface helpers

## Security

These utilities do not require:

- Private keys
- Seed phrases
- Wallet credentials
- API secrets

Never expose sensitive wallet or environment information in client-side code.

## Developer Resources

Documentation:

https://github.com/LifyXHQ/lifyx-docs

API Examples:

https://github.com/LifyXHQ/lifyx-api-examples

## Official Links

Website: https://lifyx.exchange

Trading Platform: https://app.lifyx.exchange

GitHub: https://github.com/LifyXHQ

Support: support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
