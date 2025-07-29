import * as bip39 from 'bip39'

import { describe, expect, test } from '@jest/globals'

import { AbstractWalletAccountReadOnly } from '../index.js'

class DummyWalletAccountReadOnly extends AbstractWalletAccountReadOnly {
  async getBalance () {
    return 0
  }

  async getTokenBalance () {
    return 0
  }

  async quoteSendTransaction (tx) {
    return { fee: 0 }
  }

  async quoteTransfer (options) {
    return { fee: 0 }
  }

  async getTransactionReceipt (hash) {
    return null
  }
}

const ADDRESS = '0xa460AEbce0d3A4BecAd8ccf9D6D4861296c503Bd'

describe('AbstractWalletAccountReadOnly', () => {
  describe('constructor', () => {
    test('should successfully initialize a read-only wallet account for the given address', async () => {
      const account = new DummyWalletAccountReadOnly(ADDRESS)

      expect(await account.getAddress()).toEqual(ADDRESS)
    })
  })
})
