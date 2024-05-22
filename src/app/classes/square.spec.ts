import { Square } from './square';
import { Point } from './point';

describe('Square', () => {
  it('should create an instance', () => {
    const square = new Square(new Point(0, 0), 10);
    expect(square).toBeTruthy();
    expect(square.width).toEqual(10);
    expect(square.height).toEqual(10);
  });

  it('should move by given offset', () => {
    const square = new Square(new Point(1, 1), 10);
    square.move(3, 4);
    expect(square.topLeft.x).toEqual(4);
    expect(square.topLeft.y).toEqual(5);
  });

  it('should resize', () => {
    const square = new Square(new Point(0, 0), 10);
    square.resize(20);
    expect(square.width).toEqual(20);
    expect(square.height).toEqual(20);
  });

  it('should rotate around a point', () => {
    const square = new Square(new Point(1, 1), 10);
    square.rotate(new Point(1, 1), 90);
    expect(square.topLeft.x).toBeCloseTo(1);
    expect(square.topLeft.y).toBeCloseTo(1);
  });
});
