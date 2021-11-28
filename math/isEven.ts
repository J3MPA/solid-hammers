import { strictEqual } from '../functions'

export const isEven = (number: number) => strictEqual(number % 2, 0)
