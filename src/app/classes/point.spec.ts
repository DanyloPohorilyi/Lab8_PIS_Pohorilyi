import { Point } from './point';

describe('Point', () => {
  it('should create an instance', () => {
    expect(new Point(0, 0)).toBeTruthy();
  });

  it('should move by given offset', () => {
    const p = new Point(1, 1);
    p.move(3, 4);
    expect(p.x).toEqual(4);
    expect(p.y).toEqual(5);
  });

  it('should rotate around the origin', () => {
    const p = new Point(1, 0);
    const origin = new Point(0, 0);
    p.rotate(origin, 90);
    expect(p.x).toBeCloseTo(0);
    expect(p.y).toBeCloseTo(1);
  });
});
