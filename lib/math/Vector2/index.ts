import { isRealNumber, isRealPoint } from '../utils'

type RealNumber = number

class Vector2 {
  x: RealNumber
  y: RealNumber

  constructor(x: RealNumber, y: RealNumber) {
    if (!isRealPoint(x, y)) throw new TypeError('Point must be a real number')

    this.x = x
    this.y = y
  }

  public add(vector: Vector2) {
    return Vector2.sum(this, vector)
  }

  public subtract(vector: Vector2) {
    return Vector2.subtract(this, vector)
  }

  public scale(scalar: RealNumber) {
    return Vector2.scale(this, scalar)
  }

  public normalize() {
    return Vector2.normalize(this)
  }

  public distanceTo(vector: Vector2) {
    return Vector2.distanceBetween(this, vector)
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

  static distanceBetween(vectorA: Vector2, vectorB: Vector2) {
    const dx = vectorA.x - vectorB.x
    const dy = vectorA.y - vectorB.y
    return Math.hypot(dx, dy)
  }

  static sum(vectorA: Vector2, vectorB: Vector2) {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y)
  }

  static subtract(vectorA: Vector2, vectorB: Vector2) {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y)
  }

  static scale(vector: Vector2, scalar: RealNumber) {
    if (!isRealNumber(scalar))
      throw new TypeError('Scalar must be a real number')
    return new Vector2(vector.x * scalar, vector.y * scalar)
  }

  static normalize(vector: Vector2) {
    const normal = (vector.y + vector.x) / 2
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

  static fromMagnitute(magnitute: RealNumber) {
    if (!isRealNumber(magnitute))
      throw new TypeError('Magnitute must be a real number')

    const normal = Math.sqrt(magnitute ** 2 / 2)
    return new Vector2(normal, normal)
  }

  static isVector2(vector: any) {
    return vector instanceof Vector2
  }
}

export default Vector2
