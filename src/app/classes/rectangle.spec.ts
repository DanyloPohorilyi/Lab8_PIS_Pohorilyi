import { Rectangle } from './rectangle';
import { Point } from './point';

describe('Rectangle', () => {
  it('should create an instance', () => {
    const rect = new Rectangle(new Point(0, 0), 10, 20);
    expect(rect).toBeTruthy();
    expect(rect.width).toEqual(10);
    expect(rect.height).toEqual(20);
  });

  it('should move by given offset', () => {
    const rect = new Rectangle(new Point(0, 0), 10, 20);
    rect.move(5, 5);
    expect(rect.topLeft.x).toEqual(5);
    expect(rect.topLeft.y).toEqual(5);
  });

  it('should resize', () => {
    const rect = new Rectangle(new Point(0, 0), 10, 20);
    rect.resize(15, 25);
    expect(rect.width).toEqual(15);
    expect(rect.height).toEqual(25);
  });

  it('should rotate around a point', () => {
    const rect = new Rectangle(new Point(1, 1), 10, 20);
    rect.rotate(new Point(1, 1), 90);
    expect(rect.topLeft.x).toBeCloseTo(1);
    expect(rect.topLeft.y).toBeCloseTo(1);
  });
});
