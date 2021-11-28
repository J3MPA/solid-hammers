import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  testEnvironment: 'node',
}

export default config
