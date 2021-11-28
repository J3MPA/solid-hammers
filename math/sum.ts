import { isObject, isNumbers, isRealPoint } from '../functions'
import Vector2, { Vector2Shape } from './Vector2'

const isVector2Shape = (maybeVector2: any): maybeVector2 is Vector2Shape =>
  isObject(maybeVector2) &&
  isRealPoint(maybeVector2.x, maybeVector2.y) &&
  !Vector2.isVector2(maybeVector2)

const isVector2Shapes = (x: unknown): x is Vector2Shape[] =>
  Array.isArray(x) && x.every(isVector2Shape)

const isVector2 = (x: unknown): x is Vector2[] =>
  Array.isArray(x) && x.every(Vector2.isVector2)

const sumNumbers = (addends: number[]) =>
  addends.reduce((acc, num) => acc + num, 0)

const sumVector2Shapes = (addends: Vector2Shape[]): Vector2 =>
  addends.reduce<Vector2>(Vector2.sum, Vector2.zero())

export enum SumType {
  Number = 'number',
  Vector2 = 'Vector2',
}

const sum = <Addends extends number | Vector2Shape>(...addends: Addends[]) => {
  if (isNumbers(addends)) {
    return sumNumbers(addends)
  }
  if (isVector2(addends) || isVector2Shapes(addends)) {
    return sumVector2Shapes(addends)
  }
  // default
  throw new TypeError(
    'Expected addends to be of type Array<number> or Array<Vector2Shape | Vector2>'
  )
}

export default sum
