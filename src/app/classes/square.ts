import { Rectangle } from './rectangle';
import { Point } from './point';

export class Square extends Rectangle {
  constructor(topLeft: Point, size: number, color: string = 'black') {
    super(topLeft, size, size, color);
  }

  override resize(newSize: number): void {
    this.width = newSize;
    this.height = newSize;
  }
}
