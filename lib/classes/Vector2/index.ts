import { isRealPoint, isRealNumber } from './utils'
type RealNumber = number
export class Vector2 {
  x: number
  y: number

  constructor(x: number, y: number) {
    if (isRealPoint(x, y)) {
      this.x = x
      this.y = y
    } else throw new TypeError('Point must be a real number')
  }

  public add(v: Vector2) {
    return Vector2.sum(this, v)
  }

  public take(v: Vector2) {
    return Vector2.subtract(this, v)
  }

  public scale(s: number) {
    if (isRealNumber(s)) {
      return Vector2.scale(this, s)
    } else throw new TypeError('Sclar must be a real number')
  }

  get normalized() {
    return Vector2.normalize(this)
  }

  public normalize() {
    return Vector2.normalize(this)
  }

  public magnitute(v: Vector2) {
    return Vector2.distanceBetween(this, v)
  }

  public switchDirection() {
    return Vector2.scale(this, -1)
  }

  public switchY() {
    return new Vector2(this.x, -1 * this.y)
  }

  public switchX() {
    return new Vector2(-1 * this.x, this.y)
  }

  static distanceBetween(v1: Vector2, v2: Vector2) {
    const dx = v1.x - v2.x
    const dy = v1.y - v2.y
    return Math.hypot(dx, dy)
  }

  static sum(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x + v2.x, v1.y + v2.y)
  }

  static subtract(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x - v2.x, v1.y - v2.y)
  }

  static scale(v: Vector2, s: number) {
    return new Vector2(v.x * s, v.y * s)
  }

  static normalize(v: Vector2) {
    const normal = (v.y + v.x) / 2
    return new Vector2(normal, normal)
  }

  static zero() {
    return new Vector2(0, 0)
  }

  static down() {
    return new Vector2(0, -1)
  }

  static up() {
    return new Vector2(0, 1)
  }

  static left() {
    return new Vector2(-1, 0)
  }

  static right() {
    return new Vector2(1, 0)
  }

  static fromMagnitute(m: number) {
    const xy = Math.sqrt(m ** 2 / 2)
    return new Vector2(xy, xy)
  }

  static isVector2(v: any) {
    return v instanceof Vector2
  }
}
