import { strictEqual } from '../functions'

const isEven = (number: number) => strictEqual(number % 2, 0)

export default isEven
