import { Room, RoomOrientation, Tile } from "./Tile";

export enum FloorSize {
  standard = 4,
  large = 8,
  xlarge = 16,
}

const ROOM_WIDTH = 10;
const ROOM_HEIGHT = 8;

export default class FloorGenerator {
  readonly floorSize: FloorSize;

  constructor(floorSize: FloorSize) {
    this.floorSize = floorSize;
  }

  generate() {
    let rooms: Room[][] = [];
    let start = Math.floor(Math.random() * this.floorSize);
    let newDirection = 0;
    console.log(`generated - start ${start}`);

    for (let y = 0; y < this.floorSize; y++) {
      // Vertical crawl
      rooms[y] = [];
      for (let x = 0; x < this.floorSize; x++) {
        // Horizontal crawl
        let room = new Room(x, y, RoomOrientation.left);
        console.log(room.describe());
        rooms[y][x] = room;
      }
    }

    console.log("done");
  }

  createMainPath(floorSize: FloorSize) {
    // start on top
    let currentY = 0;

    // pick a random x room
    let currentX = Math.floor(Math.random() * this.floorSize);

    // directions to choose from
    const directions = [1, 1, 2, 2, 3];

    // current orientation
    let newDirection = 0;

    // path array
    var path = [];
    path.push({ x: currentX, y: currentY, direction: RoomOrientation.left });

    while (currentY < floorSize) {
      newDirection = directions[Math.floor(Math.random() * directions.length)];

      if (newDirection === 1) {
        // left
        if (currentX > 0) {
        } else {
          if (currentY < 3) {
          }
        }
      } else if (newDirection === 2) {
        // right
      } else if (newDirection === 3) {
        // down
      }
    }
  }
}
