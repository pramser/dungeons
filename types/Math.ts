export default class Math {
  static convertToIso(x: number, y: number, scaleInPixels: number) {
    // Only supports squares right now
    const WIDTH = scaleInPixels;
    const HEIGHT = WIDTH;

    return {
      x: x * 1 * 0.5 * WIDTH + y * -1 * 0.5 * WIDTH,
      y: x * 0.5 * 0.5 * HEIGHT + y * 0.5 * 0.5 * HEIGHT,
    };
  }

  static getRoomPos(
    x: number,
    y: number,
    roomX: number,
    roomY: number,
    scaleInPixels: number
  ) {
    const offsetX = -2;
    const offsetY = 5;
    const floorSize = 8;

    // calculate x, y with room offset
    const relativeX = x + roomX * floorSize - offsetX;
    const relativeY = y + roomY * floorSize - offsetY;

    return this.convertToIso(relativeX, relativeY, scaleInPixels);
  }
}
