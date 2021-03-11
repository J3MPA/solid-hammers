export class Vector2 {
  x: number
  y: number

  constructor(x: number, y: number) {
    if (typeof x !== 'number' || typeof y !== 'number')
      throw new TypeError('Value of x and y must be of type number')
    if (Number.isNaN(x) || Number.isNaN(y))
      throw new TypeError("Value of x and y can't be of type NaN")

    this.x = x
    this.y = y
  }

  public add(v: Vector2) {
    return Vector2.sum(this, v)
  }

  public take(v: Vector2) {
    return Vector2.subtract(this, v)
  }

  public scale(s: number) {
    return Vector2.scale(this, s)
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
