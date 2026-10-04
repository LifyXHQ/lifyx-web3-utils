# LifyX Address Utilities

Reusable wallet address utilities for Web3 applications across the LifyX ecosystem.

## Overview

This directory contains lightweight helpers for formatting, validating and working with EVM-compatible wallet addresses.

These utilities are designed to simplify common wallet and interface workflows across LifyX applications.

## Available Utilities

### Shorten Address

`shorten-address.js`

Shortens a wallet address for user interface display.

Example:

`0x1234567890abcdef1234567890abcdef12345678`

becomes:

`0x1234...5678`

### Validate EVM Address

`validate-evm-address.js`

Checks whether a value matches the basic format of an EVM wallet address.

Returns:

`true`

or:

`false`

### Explorer URL

`get-explorer-url.js`

Generates a block explorer URL for:

- Wallet addresses
- Transaction hashes

Supported explorer configurations include:

- Ethereum
- Arbitrum One
- Base
- Optimism
- Polygon
- BNB Smart Chain

## Usage

These utilities are designed for:

- Wallet interfaces
- Account displays
- Transaction history
- Explorer links
- Address validation
- Web3 dashboards
- LifyX wallet integration workflows

## Security

These utilities never require:

- Private keys
- Seed phrases
- Wallet passwords
- API secrets

Never request or expose wallet private keys or seed phrases in frontend applications.

Address validation only checks address format and does not prove wallet ownership.

## Related Utilities

Network utilities:

`../networks/`

Network helpers include:

- Chain ID detection
- Supported network checks
- Native currency information
- Chain name lookup
- Chain ID hexadecimal conversion

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
