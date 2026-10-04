# LifyX Web3 Utilities

Reusable Web3 utilities for wallets, networks and LifyX integrations.

## Overview

This repository contains lightweight utilities designed to support common Web3 workflows across the LifyX ecosystem.

The goal is to provide reusable helpers for wallet connectivity, network detection, chain configuration, address formatting and other developer-facing integration tasks.

## Planned Utilities

### Wallet Utilities

- Wallet connection helpers
- Wallet address formatting
- Connected wallet detection
- Wallet state helpers
- Account validation

### Network Utilities

- Chain ID detection
- Network switching
- Supported network checks
- Explorer URL helpers
- RPC configuration helpers

### Token Utilities

- Token metadata helpers
- Token symbol formatting
- Decimal conversion helpers
- Contract address validation

### Address Utilities

- Address shortening
- Address validation
- Explorer link generation
- Copy-friendly formatting

### LifyX Integration Utilities

- Spot integration helpers
- Perpetual integration helpers
- Market symbol formatting
- Trading pair normalization
- Environment configuration helpers

## Example Structure

src/
├── wallet/
├── networks/
├── tokens/
├── address/
└── lifyx/

## Infrastructure

LifyX integrates specialized infrastructure providers across its trading ecosystem:

- KalqiX infrastructure for Spot markets
- Orderly infrastructure for Perpetual markets

Utilities in this repository are designed to support integrations around the LifyX application layer.

## Security

Never expose:

- Private keys
- Seed phrases
- API secrets
- Wallet credentials
- Environment secrets

Web3 utilities should never require access to wallet seed phrases or private keys.

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

X: https://x.com/LifyX_Exchange

LinkedIn: https://www.linkedin.com/company/lifyxexchange/

Telegram: https://t.me/lifyx_exchange

## Support

support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
