import { Point } from './point';

export class Rhombus {
  constructor(public center: Point, public d1: number, public d2: number, public color: string = 'black') { }

  move(dx: number, dy: number): void {
    this.center.move(dx, dy);
  }

  rotate(center: Point, angle: number): void {
    this.center.rotate(center, angle);
  }

  resize(newD1: number, newD2: number): void {
    this.d1 = newD1;
    this.d2 = newD2;
  }
}
