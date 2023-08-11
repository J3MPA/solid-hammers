import type { JestConfigWithTsJest } from 'ts-jest/dist/types'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  testEnvironment: 'node',
  maxWorkers: '50%',
}

export default config
