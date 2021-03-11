import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  globals: { 'ts-jest': { tsconfig: 'tsconfig.json' } },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  testEnvironment: 'node',
  reporters: ['default'],
}

export default config
