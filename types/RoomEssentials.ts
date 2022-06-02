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

export enum RoomDirection {
  left = 1,
  right = 2,
  down = 3,
  up = 4,
}

export class Room {
  readonly floorX: number;
  readonly floorY: number;
  readonly direction: RoomDirection;

  tiles: Tile[] = [];

  constructor(floorX: number, floorY: number, direction: RoomDirection) {
    this.floorX = floorX;
    this.floorY = floorY;
    this.direction = direction;
  }

  addTile(name: string, x: number, y: number) {
    this.tiles.push(new Tile(name, x, y));
  }

  loadTiles(tiles: Tile[]): void {
    this.tiles = tiles;
  }

  describe(): string {
    return `x: ${this.floorX} y: ${this.floorY} rooms: ${this.tiles.length}`;
  }
}

export class RoomTemplate {
  readonly directions: RoomDirection[];
  readonly tiles: Tile[];

  constructor(directions: RoomDirection[], tiles: Tile[]) {
    this.directions = directions;
    this.tiles = tiles;
  }
}

export class RoomTemplates {
  static find(direction: RoomDirection): RoomTemplate {
    return (
      this.roomTemplates.find((template) =>
        template.directions.includes(direction)
      ) ??
      new RoomTemplate(
        [],
        [
          new Tile("floor", 0, 1),
          new Tile("floor", 0, 2),
          new Tile("floor", 1, 1),
          new Tile("floor", 1, 2),
          new Tile("floor", 2, 1),
          new Tile("floor", 2, 2),
          new Tile("floor", 3, 1),
          new Tile("floor", 3, 2),
        ]
      )
    );
  }

  static roomTemplates: RoomTemplate[] = [
    new RoomTemplate(
      [RoomDirection.left, RoomDirection.right],
      [
        new Tile("floor", 0, 0),
        new Tile("floor", 0, 1),
        new Tile("floor", 0, 2),
        new Tile("floor", 0, 3),
        new Tile("floor", 1, 0),
        new Tile("floor", 1, 1),
        new Tile("floor", 1, 2),
        new Tile("floor", 1, 3),
        new Tile("floor", 2, 0),
        new Tile("floor", 2, 1),
        new Tile("floor", 2, 2),
        new Tile("floor", 2, 3),
        new Tile("floor", 3, 0),
        new Tile("floor", 3, 1),
        new Tile("floor", 3, 2),
        new Tile("floor", 3, 3),
      ]
    ),
    new RoomTemplate(
      [RoomDirection.left, RoomDirection.right, RoomDirection.up],
      [
        new Tile("floor", 0, 0),
        new Tile("floor", 0, 1),
        new Tile("floor", 0, 2),
        new Tile("floor", 0, 3),
        new Tile("floor", 1, 0),
        new Tile("floor", 1, 1),
        new Tile("floor", 1, 2),
        new Tile("floor", 1, 3),
        new Tile("floor", 2, 0),
        new Tile("floor", 2, 1),
        new Tile("floor", 2, 2),
        new Tile("floor", 2, 3),
        new Tile("floor", 3, 0),
        new Tile("floor", 3, 1),
        new Tile("floor", 3, 2),
        new Tile("floor", 3, 3),
      ]
    ),
    new RoomTemplate(
      [RoomDirection.left, RoomDirection.right, RoomDirection.down],
      [
        new Tile("floor", 0, 0),
        new Tile("floor", 0, 1),
        new Tile("floor", 0, 2),
        new Tile("floor", 0, 3),
        new Tile("floor", 1, 0),
        new Tile("floor", 1, 1),
        new Tile("floor", 1, 2),
        new Tile("floor", 1, 3),
        new Tile("floor", 2, 0),
        new Tile("floor", 2, 1),
        new Tile("floor", 2, 2),
        new Tile("floor", 2, 3),
        new Tile("floor", 3, 0),
        new Tile("floor", 3, 1),
        new Tile("floor", 3, 2),
        new Tile("floor", 3, 3),
      ]
    ),
  ];
}
