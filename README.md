# @wdk/wallet

## What This Does

Base classes for the wallet and protocol modules in the Wallet Development Kit (WDK)

## Who Should Use This

This module is for internal use only. If you want to build a wallet, use one of these instead:

**Recommended:**
- `@wdk/core` - Use this to work with multiple chains and features

**Individual wallet modules:**
- `@wdk/wallet-evm` - For Ethereum and EVM chains
- `@wdk/wallet-evm-erc-4337` - For EVM chains with ERC-4337 support
- `@wdk/wallet-btc` - For Bitcoin
- `@wdk/wallet-ton` - For TON
- `@wdk/wallet-ton-gasless` - For TON with gasless transactions
- `@wdk/wallet-tron` - For TRON
- `@wdk/wallet-tron-gasfree` - For TRON with gasless transactions
- `@wdk/wallet-solana` - For Solana
- `@wdk/wallet-spark` - For Spark


## Key Parts

- **WalletManager** - Base class for managing wallets
- **WalletAccount** - Base class for wallet accounts
- **WalletAccountReadOnly** - Base class for read-only accounts
- **IWalletAccount** - Interface that all accounts must follow

## Learn More

For full docs, visit [docs.wallet.tether.io](https://docs.wallet.tether.io)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.