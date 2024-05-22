import { Point } from './point';

export class Rectangle {
  public topLeft: Point;
  constructor(topLeft: Point, public width: number, public height: number, public color: string = 'black') {
    this.topLeft = topLeft;
  }

  move(dx: number, dy: number): void {
    this.topLeft.move(dx, dy);
  }

  rotate(center: Point, angle: number): void {
    this.topLeft.rotate(center, angle);
  }

  resize(newWidth: number, newHeight: number): void {
    this.width = newWidth;
    this.height = newHeight;
  }
}
