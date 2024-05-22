export class Point {
  constructor(public x: number, public y: number) { }

  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }

  rotate(origin: Point, angle: number): void {
    const radians = (Math.PI / 180) * angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    const nx = cos * (this.x - origin.x) - sin * (this.y - origin.y) + origin.x;
    const ny = sin * (this.x - origin.x) + cos * (this.y - origin.y) + origin.y;

    this.x = nx;
    this.y = ny;
  }
}
