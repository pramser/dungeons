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
  readonly rooms: Room[][] = [];

  constructor(floorSize: FloorSize) {
    this.floorSize = floorSize;
  }

  generate() {
    const path = this.createMainPath(this.floorSize);
    let message = "\n";
    for (let y = 0; y < this.floorSize; y++) {
      // Vertical crawl
      this.rooms[y] = [];

      for (let x = 0; x < this.floorSize; x++) {
        let crit = path.find((p) => p.x === x && p.y === y);

        if (crit !== undefined) {
          message += crit.direction;
        } else {
          message += "0";
        }

        if (x === 3) {
          message += "\n";
        }

        // Horizontal crawl
        let room = new Room(x, y, RoomOrientation.left);
        this.rooms[y][x] = room;
      }
    }

    console.log(message);
    console.log("done");
  }

  createMainPath(floorSize: FloorSize) {
    // bounds of the floor wall
    const FLOOR_BOUNDS = floorSize - 1;

    // start on top
    let currentY = 0;

    // pick a random x room
    let currentX = Math.floor(Math.random() * this.floorSize);

    // current orientation
    let newDirection = 0;

    // path array
    var path = [];

    // seed array with first room
    path.push({ x: currentX, y: currentY, direction: RoomOrientation.left });

    while (currentY < floorSize) {
      // pick a default direction
      if (newDirection === 0) {
        newDirection = this.randomDirection([
          RoomOrientation.left,
          RoomOrientation.left,
          RoomOrientation.right,
          RoomOrientation.right,
          RoomOrientation.down,
        ]);
      }

      if (newDirection === RoomOrientation.left) {
        // left
        if (currentX > 0) {
          // make sure we're not hitting the wall (x: 0)
          path.push({
            x: --currentX,
            y: currentY,
            direction: RoomOrientation.left,
          });
          newDirection = this.randomDirection([
            RoomOrientation.left,
            RoomOrientation.left,
            RoomOrientation.left,
            RoomOrientation.down,
          ]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            path.push({
              x: currentX,
              y: currentY,
              direction: RoomOrientation.right,
            });
            path.push({
              x: currentX,
              y: currentY++,
              direction: RoomOrientation.down,
            });
            newDirection = RoomOrientation.right;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection === RoomOrientation.right) {
        // right
        if (currentX < FLOOR_BOUNDS) {
          // make sure we're not hitting the wall (x: 3)
          path.push({
            x: ++currentX,
            y: currentY,
            direction: RoomOrientation.right,
          });
          newDirection = this.randomDirection([
            RoomOrientation.right,
            RoomOrientation.right,
            RoomOrientation.right,
            RoomOrientation.down,
          ]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            path.push({
              x: currentX,
              y: currentY,
              direction: RoomOrientation.right,
            });
            path.push({
              x: currentX,
              y: ++currentY,
              direction: RoomOrientation.down,
            });
            newDirection = RoomOrientation.left;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection === RoomOrientation.down) {
        // down
        if (currentY < FLOOR_BOUNDS) {
          path.push({
            x: currentX,
            y: currentY,
            direction: RoomOrientation.right,
          });
          path.push({
            x: currentX,
            y: ++currentY,
            direction: RoomOrientation.down,
          });
          newDirection = 0;

          if (currentX === FLOOR_BOUNDS) {
            newDirection = this.randomDirection([
              RoomOrientation.left,
              RoomOrientation.left,
              RoomOrientation.down,
            ]);
          } else if (currentX === 0) {
            newDirection = this.randomDirection([
              RoomOrientation.right,
              RoomOrientation.right,
              RoomOrientation.down,
            ]);
          }
        } else {
          ++currentY;
        }
      }
    }

    return path;
  }

  randomDirection(directions: RoomOrientation[]): RoomOrientation {
    return directions[Math.floor(Math.random() * directions.length)];
  }
}
