import { Room, RoomLayout, RoomTemplates } from "./RoomEssentials";

export enum FloorSize {
  standard = 4,
  large = 8,
  xlarge = 16,
}

const ROOM_WIDTH = 4; // def: 10
const ROOM_HEIGHT = 4; // def: 8

enum RoomDirection {
  left = 1,
  right = 2,
  down = 3,
}

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
          const empTemplate = RoomTemplates.find(0);
          empRoom.loadTiles(empTemplate.tiles);

          // empty room tile
          this.rooms[y][x] = empRoom;
          continue;
        }

        // Horizontal crawl
        let room = new Room(x, y, crit.layout);
        let template = RoomTemplates.find(crit.layout);
        room.loadTiles(template.tiles);

        // valid, crit tile
        this.rooms[y][x] = room;
      }
    }

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
    var route: any[] = [];

    const addToRoute = (x: number, y: number, layout: RoomLayout) => {
      // existing element
      let existingIndex = route.findIndex((r) => r.x === x && r.y === y);
      if (existingIndex > -1) {
        route[existingIndex] = { x, y, layout };
        return;
      }

      // new element
      route.push({ x, y, layout });
    };

    // seed array with first room
    addToRoute(currentX, currentY, RoomLayout.leftRight);

    while (currentY < floorSize) {
      // pick a default direction
      if (newDirection === 0) {
        newDirection = this.randomDirection([1, 1, 2, 2, 3]);
      }

      if (newDirection == RoomDirection.left) {
        if (currentX > 0) {
          // make sure we're not hitting the wall (x: 0)
          addToRoute(--currentX, currentY, RoomLayout.leftRight);
          newDirection = this.randomDirection([1, 1, 1, 3]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            addToRoute(currentX, currentY, RoomLayout.exitFloor);
            addToRoute(currentX, ++currentY, RoomLayout.entranceCeiling);
            newDirection = RoomDirection.right;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection == RoomDirection.right) {
        if (currentX < FLOOR_BOUNDS) {
          // make sure we're not hitting the wall (x: 3)
          addToRoute(++currentX, currentY, RoomLayout.leftRight);
          newDirection = this.randomDirection([2, 2, 2, 3]);
        } else {
          // if we hit a wall, go down and right
          if (currentY < FLOOR_BOUNDS) {
            addToRoute(currentX, currentY, RoomLayout.exitFloor);
            addToRoute(currentX, ++currentY, RoomLayout.entranceCeiling);
            newDirection = RoomDirection.left;
          } else {
            // no moves; exit out of loop
            ++currentY;
          }
        }
      } else if (newDirection == RoomDirection.down) {
        if (currentY < FLOOR_BOUNDS) {
          addToRoute(currentX, currentY, RoomLayout.exitFloor);
          addToRoute(currentX, ++currentY, RoomLayout.entranceCeiling);
          newDirection = 0;

          if (currentX === FLOOR_BOUNDS) {
            newDirection = this.randomDirection([1, 1, 3]);
          } else if (currentX === 0) {
            newDirection = this.randomDirection([2, 2, 3]);
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
