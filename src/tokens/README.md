# LifyX Token Utilities

Reusable token utilities for Web3 applications across the LifyX ecosystem.

## Overview

This directory contains lightweight helpers for formatting token amounts, parsing user input and normalizing token symbols.

These utilities are designed to simplify common token-related workflows across LifyX applications.

## Available Utilities

### Format Token Amount

`format-token-amount.js`

Converts a raw integer token amount into a human-readable value using token decimals.

Example:

`1000000` with `6` decimals becomes:

`1`

Example:

`123450000` with `6` decimals becomes:

`123.45`

### Parse Token Amount

`parse-token-amount.js`

Converts a human-readable token amount into its raw integer representation.

Example:

`1` with `6` decimals becomes:

`1000000`

Example:

`1.25` with `6` decimals becomes:

`1250000`

### Format Token Symbol

`format-token-symbol.js`

Normalizes a token symbol for display and comparison.

Example:

`" usdc "` becomes:

`"USDC"`

Example:

`"eth"` becomes:

`"ETH"`

## Typical Usage

These utilities can support:

- Token balance displays
- Deposit and withdrawal interfaces
- Trading forms
- Swap interfaces
- Token amount calculations
- Token symbol normalization
- Web3 portfolio interfaces

## Precision

Token amounts are handled using integer-based operations where appropriate.

Developers should always use the correct token decimal value when converting between raw and human-readable amounts.

## Security

These utilities do not require:

- Private keys
- Seed phrases
- Wallet passwords
- API secrets

Always validate user input before submitting transactions.

## Related Utilities

Address utilities:

`../address/`

Network utilities:

`../networks/`

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

Website: https://lifyx.exchange

Trading Platform: https://app.lifyx.exchange

GitHub: https://github.com/LifyXHQ

Support: support@lifyx.exchange

---

© 2026 LifyX. All rights reserved.
