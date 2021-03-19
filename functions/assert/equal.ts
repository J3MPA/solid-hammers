const equal = <T>(valueA: unknown, valueB: T): valueA is T => valueA == valueB
export default equal
