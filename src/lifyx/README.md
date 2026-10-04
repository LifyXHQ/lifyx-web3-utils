# LifyX Integration Utilities

Reusable utilities designed specifically for LifyX Spot and Perpetual market integrations.

## Overview

This directory contains LifyX-specific helpers for working with market symbols, market types, infrastructure providers and trading URLs.

These utilities are designed to simplify application-level integration workflows across the LifyX ecosystem.

## Available Utilities

### Format Market Symbol

`format-market-symbol.js`

Formats LifyX market symbols into a more readable form.

Examples:

`cbBTC_USDC` becomes:

`cbBTC/USDC`

`PERP_BTC_USDC` becomes:

`BTC/USDC`

### Get Market Type

`get-market-type.js`

Detects whether a market symbol represents:

- Spot
- Perpetual
- Unknown

Examples:

`cbBTC_USDC` returns:

`spot`

`PERP_BTC_USDC` returns:

`perpetual`

### Get Market Provider

`get-market-provider.js`

Returns the infrastructure provider associated with a LifyX market.

Current mapping:

- Spot → KalqiX
- Perpetual → Orderly

Examples:

`cbBTC_USDC` returns:

`KalqiX`

`PERP_BTC_USDC` returns:

`Orderly`

### Get Trading URL

`get-trading-url.js`

Generates a LifyX trading URL for a selected market symbol.

Example:

`cbBTC_USDC`

can generate:

`https://app.lifyx.exchange/en/trade/cbBTC_USDC`

The utility also supports language-specific routes.

## Infrastructure Providers

### KalqiX

Used within LifyX Spot infrastructure.

### Orderly

Used within LifyX Perpetual infrastructure.

## Typical Usage

These utilities can support:

- Market selectors
- Trading interfaces
- Spot and Perpetual routing
- Provider detection
- Market symbol formatting
- Trading link generation
- LifyX developer integrations

## Security

These utilities do not require:

- Private keys
- Seed phrases
- Wallet passwords
- API secrets

Never expose sensitive credentials in client-side integrations.

## Related Utilities

Address utilities:

`../address/`

Network utilities:

`../networks/`

Token utilities:

`../tokens/`

Wallet utilities:

`../wallet/`

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

Support:

support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
