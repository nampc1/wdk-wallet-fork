import { beforeEach, describe, expect, test } from '@jest/globals'

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
  let account

  beforeEach(() => {
    account = new DummyWalletAccountReadOnly(ADDRESS)
  })

  describe('getAddress', () => {
    test('should return the correct address', async () => {
      const address = await account.getAddress()

      expect(address).toBe(ADDRESS)
    })
  })
})
