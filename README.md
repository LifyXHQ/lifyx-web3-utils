# LifyX Web3 Utilities

Reusable Web3 utilities for wallets, networks, tokens and LifyX integrations.

## Overview

This repository contains lightweight reusable utilities designed to support common Web3 workflows across the LifyX ecosystem.

Current utilities focus on:

- Wallet connectivity
- Network detection
- Chain configuration
- Address formatting
- Token amount handling
- Explorer links
- LifyX market helpers
- EVM-compatible application workflows

## Repository Structure

src/
├── address/
├── lifyx/
├── networks/
├── tokens/
└── wallet/

## Address Utilities

Location:

`src/address/`

Available utilities:

- `shorten-address.js`
- `validate-evm-address.js`
- `get-explorer-url.js`

These utilities support wallet address formatting, validation and explorer link generation.

Documentation:

`src/address/README.md`

## LifyX Integration Utilities

Location:

`src/lifyx/`

Available utilities:

- `format-market-symbol.js`
- `get-market-type.js`
- `get-market-provider.js`
- `get-trading-url.js`

These utilities support LifyX Spot and Perpetual market formatting, market type detection, infrastructure provider mapping and trading URL generation.

Current provider mapping:

- Spot → KalqiX
- Perpetual → Orderly

Documentation:

`src/lifyx/README.md`

## Network Utilities

Location:

`src/networks/`

Available utilities:

- `get-network-by-chain-id.js`
- `is-supported-network.js`
- `get-chain-name.js`
- `get-native-currency.js`
- `chain-id-to-hex.js`

These utilities support chain detection, supported network checks, native currency information and chain ID formatting.

Documentation:

`src/networks/README.md`

## Token Utilities

Location:

`src/tokens/`

Available utilities:

- `format-token-amount.js`
- `parse-token-amount.js`
- `format-token-symbol.js`

These utilities support token amount formatting, raw amount conversion and token symbol normalization.

Documentation:

`src/tokens/README.md`

## Wallet Utilities

Location:

`src/wallet/`

Available utilities:

- `get-connected-wallet.js`
- `request-wallet-connection.js`
- `switch-network.js`

These utilities support injected EVM wallet providers, wallet connection workflows and network switching.

Documentation:

`src/wallet/README.md`

## Supported Networks

Current network utility configuration includes:

- Ethereum
- Arbitrum One
- Base
- Optimism
- Polygon
- BNB Smart Chain

## LifyX Trading Infrastructure

LifyX integrates specialized infrastructure providers across its trading ecosystem.

### Spot

Infrastructure Provider:

`KalqiX`

Used for LifyX Spot market infrastructure and related trading workflows.

### Perpetuals

Infrastructure Provider:

`Orderly`

Used for LifyX Perpetual market infrastructure, liquidity access and related trading workflows.

## Example Markets

Spot:

`cbBTC_USDC`

Perpetual:

`PERP_BTC_USDC`

LifyX-specific utilities can identify, format and generate trading links for supported market symbols.

## Usage

These utilities can be used across:

- Wallet connection interfaces
- Trading applications
- Web3 dashboards
- Deposit and withdrawal flows
- Token balance displays
- Network switching
- Explorer integrations
- Spot integrations
- Perpetual integrations
- Market selectors
- Trading route generation

## Security

Never expose:

- Private keys
- Seed phrases
- Wallet passwords
- API secrets
- Environment secrets

Utilities in this repository do not require access to private keys or seed phrases.

Wallet approval and transaction authorization must remain under the control of the user's wallet provider.

## Developer Resources

Documentation:

https://github.com/LifyXHQ/lifyx-docs

API Examples:

https://github.com/LifyXHQ/lifyx-api-examples

Changelog:

https://github.com/LifyXHQ/lifyx-changelog

## Official Links

Website:

https://lifyx.exchange

Trading Platform:

https://app.lifyx.exchange

GitHub:

https://github.com/LifyXHQ

X:

https://x.com/LifyX_Exchange

LinkedIn:

https://www.linkedin.com/company/lifyxexchange/

Telegram:

https://t.me/lifyx_exchange

## Support

support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
