import { Rhombus } from './rhombus';
import { Point } from './point';

describe('Rhombus', () => {
  it('should create an instance with default color', () => {
    const rhombus = new Rhombus(new Point(0, 0), 10, 20);
    expect(rhombus).toBeTruthy();
    expect(rhombus.d1).toEqual(10);
    expect(rhombus.d2).toEqual(20);
    expect(rhombus.color).toEqual('black');
  });

  it('should move by given offset', () => {
    const rhombus = new Rhombus(new Point(1, 2), 10, 20);
    rhombus.move(3, 4);
    expect(rhombus.center.x).toEqual(4);
    expect(rhombus.center.y).toEqual(6);
  });

  it('should resize', () => {
    const rhombus = new Rhombus(new Point(0, 0), 10, 20, 'blue');
    rhombus.resize(15, 25);
    expect(rhombus.d1).toEqual(15);
    expect(rhombus.d2).toEqual(25);
  });

  it('should rotate around a point', () => {
    const rhombus = new Rhombus(new Point(2, 3), 10, 20);
    rhombus.rotate(new Point(2, 3), 90);
    expect(rhombus.center.x).toBeCloseTo(2);
    expect(rhombus.center.y).toBeCloseTo(3);
  });
});
