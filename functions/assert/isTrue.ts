import strictEqual from './strictEqual'

const isTrue = (value: unknown): value is true => strictEqual(value, true)

export default isTrue
