import { isObject, isNumbers, isRealPoint } from '../functions'
import Vector2, { Vector2Shape } from './Vector2'

const isVector2Shape = (maybeVector2: any): maybeVector2 is Vector2Shape =>
  (isObject(maybeVector2) && isRealPoint(maybeVector2.x, maybeVector2.y)) ||
  Vector2.isVector2(maybeVector2)

const isVector2Shapes = (x: unknown): x is Vector2Shape[] =>
  Array.isArray(x) && isVector2Shape(x)

const sumNumbers = (addends: number[]) =>
  addends.reduce((acc, num) => acc + num, 0)

const sumVector2Shapes = (addends: Vector2Shape[]) =>
  addends.reduce<Vector2>(Vector2.sum, Vector2.zero())

export enum SumType {
  Number = 'number',
  Vector2 = 'Vector2',
}

interface SumTypeConfig<A, R> {
  _addends: A
  _returnValue: R
}

interface SumConfigMap {
  [SumType.Number]: SumTypeConfig<number[], number>
  [SumType.Vector2]: SumTypeConfig<Vector2Shape[], Vector2>
}

const sum = <T extends SumType = SumType.Number>(
  addends: SumConfigMap[T]['_addends'],
  type: T = SumType.Number as T
): SumConfigMap[T]['_returnValue'] => {
  switch (type) {
    case SumType.Number:
      if (isNumbers(addends)) return sumNumbers(addends)
      break
    case SumType.Vector2:
      if (isVector2Shapes(addends)) return sumVector2Shapes(addends)
      break
  }
  // default
  throw new TypeError(
    'Expected addends to be of type Array<number> or Array<Vector2Shape | Vector2>'
  )
}

export default sum
