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

export enum RoomLayout {
  isolated = 0,
  leftRight = 1,
  exitFloor = 2,
  entranceCeiling = 3,
}

export class Room {
  readonly floorX: number;
  readonly floorY: number;
  readonly layout: RoomLayout;

  tiles: Tile[] = [];

  constructor(floorX: number, floorY: number, layout: RoomLayout) {
    this.floorX = floorX;
    this.floorY = floorY;
    this.layout = layout;
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
  readonly layout: RoomLayout;
  readonly tiles: Tile[];

  constructor(layout: RoomLayout, tiles: Tile[]) {
    this.layout = layout;
    this.tiles = tiles;
  }
}

export class RoomTemplates {
  static find(layout: RoomLayout): RoomTemplate {
    return (
      this.roomTemplates.find((template) => template.layout === layout) ??
      new RoomTemplate(RoomLayout.isolated, [
        new Tile("highlight", 0, 0),
        new Tile("highlight", 0, 1),
        new Tile("highlight", 0, 2),
        new Tile("highlight", 0, 3),
        new Tile("highlight", 1, 0),
        new Tile("highlight", 1, 1),
        new Tile("highlight", 1, 2),
        new Tile("highlight", 1, 3),
        new Tile("highlight", 2, 0),
        new Tile("highlight", 2, 1),
        new Tile("highlight", 2, 2),
        new Tile("highlight", 2, 3),
        new Tile("highlight", 3, 0),
        new Tile("highlight", 3, 1),
        new Tile("highlight", 3, 2),
        new Tile("highlight", 3, 3),
      ])
    );
  }

  static roomTemplates: RoomTemplate[] = [
    new RoomTemplate(RoomLayout.leftRight, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
    ]),
    new RoomTemplate(RoomLayout.entranceCeiling, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
    ]),
    new RoomTemplate(RoomLayout.exitFloor, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
    ]),
  ];
}
