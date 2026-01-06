import { jest } from '@jest/globals'

export const findForgeVersion =
  jest.fn<typeof import('../src/version.js').findForgeVersion>()
