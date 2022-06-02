import { Room, RoomDirection, RoomTemplates } from "./RoomEssentials";

export enum FloorSize {
  standard = 4,
  large = 8,
  xlarge = 16,
}

const ROOM_WIDTH = 4; // def: 10
const ROOM_HEIGHT = 4; // def: 8

export default class FloorGenerator {
  readonly floorSize: FloorSize;
  readonly rooms: Room[][] = [];

  constructor(floorSize: FloorSize) {
    this.floorSize = floorSize;
  }

  generate() {
    const route = this.createRoute(this.floorSize);

    for (let y = 0; y < this.floorSize; y++) {
      // Vertical crawl
      this.rooms[y] = [];

      for (let x = 0; x < this.floorSize; x++) {
        let crit = route.find((p) => p.x === x && p.y === y);

        if (crit === undefined) {
          const empRoom = new Room(x, y, 0);
          const empTemplate = RoomTemplates.find(-1);

          empRoom.loadTiles(empTemplate?.tiles);

          // empty room tile
          this.rooms[y][x] = new Room(x, y, 0);
          continue;
        }

        // Horizontal crawl
        let room = new Room(x, y, crit.direction);
        let template = RoomTemplates.find(crit.direction);
        room.loadTiles(template.tiles);

        // valid, crit tile
        this.rooms[y][x] = room;
      }
    }

    console.log("done");
    return this.rooms;
  }

  createRoute(floorSize: FloorSize) {
    // bounds of the floor wall
    const FLOOR_BOUNDS = floorSize - 1;

    // start on top
    let currentY = 0;

    // pick a random x room
    let currentX = Math.floor(Math.random() * this.floorSize);

    // current orientation
    let newDirection = 0;

    // route array
    var route = [];

    // seed array with first room
    route.push({ x: currentX, y: currentY, direction: RoomDirection.left });

    while (currentY < floorSize) {
      // pick a default direction
      if (newDirection === 0) {
        newDirection = this.randomDirection([
          RoomDirection.left,
          RoomDirection.left,
          RoomDirection.right,
          RoomDirection.right,
          RoomDirection.down,
        ]);
      }

      if (newDirection === RoomDirection.left) {
        // left
        if (currentX > 0) {
          // make sure we're not hitting the wall (x: 0)
          route.push({
            x: --currentX,
            y: currentY,
            direction: RoomDirection.left,
          });
          newDirection = this.randomDirection([
            RoomDirection.left,
            RoomDirection.left,
            RoomDirection.left,
            RoomDirection.down,
          ]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            route.push({
              x: currentX,
              y: currentY,
              direction: RoomDirection.right,
            });
            route.push({
              x: currentX,
              y: currentY++,
              direction: RoomDirection.down,
            });
            newDirection = RoomDirection.right;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection === RoomDirection.right) {
        // right
        if (currentX < FLOOR_BOUNDS) {
          // make sure we're not hitting the wall (x: 3)
          route.push({
            x: ++currentX,
            y: currentY,
            direction: RoomDirection.right,
          });
          newDirection = this.randomDirection([
            RoomDirection.right,
            RoomDirection.right,
            RoomDirection.right,
            RoomDirection.down,
          ]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            route.push({
              x: currentX,
              y: currentY,
              direction: RoomDirection.right,
            });
            route.push({
              x: currentX,
              y: ++currentY,
              direction: RoomDirection.down,
            });
            newDirection = RoomDirection.left;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection === RoomDirection.down) {
        // down
        if (currentY < FLOOR_BOUNDS) {
          route.push({
            x: currentX,
            y: currentY,
            direction: RoomDirection.right,
          });
          route.push({
            x: currentX,
            y: ++currentY,
            direction: RoomDirection.down,
          });
          newDirection = 0;

          if (currentX === FLOOR_BOUNDS) {
            newDirection = this.randomDirection([
              RoomDirection.left,
              RoomDirection.left,
              RoomDirection.down,
            ]);
          } else if (currentX === 0) {
            newDirection = this.randomDirection([
              RoomDirection.right,
              RoomDirection.right,
              RoomDirection.down,
            ]);
          }
        } else {
          ++currentY;
        }
      }
    }

    return route;
  }

  randomDirection(directions: RoomDirection[]): RoomDirection {
    return directions[Math.floor(Math.random() * directions.length)];
  }
}
