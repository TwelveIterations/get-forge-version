/**
 * Unit tests for src/version.ts
 */
import { jest } from '@jest/globals'
import { findForgeVersion } from '../src/version.js'

// Mock node-fetch
const mockFetch = jest.fn()
jest.unstable_mockModule('node-fetch', () => ({
  default: mockFetch
}))

describe('version.ts', () => {
  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('Throws when minecraftVersion is missing', async () => {
    await expect(
      findForgeVersion({
        minecraftVersion: '',
        channel: 'latest'
      })
    ).rejects.toThrow('minecraftVersion is not a string')
  })
})
