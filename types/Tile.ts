export interface TileInterface {
  readonly name: string;
  readonly x: number;
  readonly y: number;

  getId(): string;
}

export class Tile implements TileInterface {
  readonly name: string;
  readonly x: number;
  readonly y: number;

  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  getId(): string {
    return `${this.name}-${this.x}-${this.y}`;
  }
}

export enum RoomOrientation {
  left = 1,
  right = 2,
  down = 3,
}

export class Room {
  readonly floorX: number;
  readonly floorY: number;
  readonly orientation: RoomOrientation;

  tiles: Tile[] = [];

  constructor(floorX: number, floorY: number, orientation: RoomOrientation) {
    this.floorX = floorX;
    this.floorY = floorY;
    this.orientation = orientation;
  }

  addTile(name: string, x: number, y: number) {
    this.tiles.push(new Tile(name, x, y));
  }

  describe(): string {
    return `x: ${this.floorX} y: ${this.floorY} rooms: ${this.tiles.length}`;
  }
}
