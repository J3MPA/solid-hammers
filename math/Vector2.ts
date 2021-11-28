import { isRealNumber, isRealPoint, isStrictEqual } from '../functions/assert'

type RealNumber = number

export interface Vector2Shape {
  x: RealNumber
  y: RealNumber
}

class Vector2 implements Vector2Shape {
  public x
  public y

  constructor(x: RealNumber = 0, y: RealNumber = 0) {
    if (isStrictEqual(isRealPoint(x, y), false)) {
      throw new TypeError('Point must be a real number')
    }

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

  static distanceBetween(vectorA: Vector2Shape, vectorB: Vector2Shape) {
    const dx = vectorA.x - vectorB.x
    const dy = vectorA.y - vectorB.y
    return Math.hypot(dx, dy)
  }

  static sum(vectorA: Vector2Shape, vectorB: Vector2Shape) {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y)
  }

  static subtract(vectorA: Vector2Shape, vectorB: Vector2Shape) {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y)
  }

  static scale(vector: Vector2Shape, scalar: RealNumber) {
    if (!isRealNumber(scalar)) {
      throw new TypeError('Scalar must be a real number')
    } else {
      return new Vector2(vector.x * scalar, vector.y * scalar)
    }
  }

  static normalize(vector: Vector2Shape) {
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

  static fromMagnitude(magnitude: RealNumber) {
    if (!isRealNumber(magnitude)) {
      throw new TypeError('Magnitude must be a real number')
    }

    const normal = Math.sqrt(magnitude ** 2 / 2)
    return new Vector2(normal, normal)
  }

  static isVector2(vector: unknown): vector is Vector2 {
    return vector instanceof Vector2
  }
}

export default Vector2
