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
        new Tile("highlight", 0, 4),
        new Tile("highlight", 0, 5),
        new Tile("highlight", 0, 6),
        new Tile("highlight", 0, 7),
        new Tile("highlight", 1, 0),
        new Tile("highlight", 1, 1),
        new Tile("highlight", 1, 2),
        new Tile("highlight", 1, 3),
        new Tile("highlight", 1, 4),
        new Tile("highlight", 1, 5),
        new Tile("highlight", 1, 6),
        new Tile("highlight", 1, 7),
        new Tile("highlight", 2, 0),
        new Tile("highlight", 2, 1),
        new Tile("highlight", 2, 2),
        new Tile("highlight", 2, 3),
        new Tile("highlight", 2, 4),
        new Tile("highlight", 2, 5),
        new Tile("highlight", 2, 6),
        new Tile("highlight", 2, 7),
        new Tile("highlight", 3, 0),
        new Tile("highlight", 3, 1),
        new Tile("highlight", 3, 2),
        new Tile("highlight", 3, 3),
        new Tile("highlight", 3, 4),
        new Tile("highlight", 3, 5),
        new Tile("highlight", 3, 6),
        new Tile("highlight", 3, 7),
        new Tile("highlight", 4, 0),
        new Tile("highlight", 4, 1),
        new Tile("highlight", 4, 2),
        new Tile("highlight", 4, 3),
        new Tile("highlight", 4, 4),
        new Tile("highlight", 4, 5),
        new Tile("highlight", 4, 6),
        new Tile("highlight", 4, 7),
        new Tile("highlight", 5, 0),
        new Tile("highlight", 5, 1),
        new Tile("highlight", 5, 2),
        new Tile("highlight", 5, 3),
        new Tile("highlight", 5, 4),
        new Tile("highlight", 5, 5),
        new Tile("highlight", 5, 6),
        new Tile("highlight", 5, 7),
        new Tile("highlight", 6, 0),
        new Tile("highlight", 6, 1),
        new Tile("highlight", 6, 2),
        new Tile("highlight", 6, 3),
        new Tile("highlight", 6, 4),
        new Tile("highlight", 6, 5),
        new Tile("highlight", 6, 6),
        new Tile("highlight", 6, 7),
        new Tile("highlight", 7, 0),
        new Tile("highlight", 7, 1),
        new Tile("highlight", 7, 2),
        new Tile("highlight", 7, 3),
        new Tile("highlight", 7, 4),
        new Tile("highlight", 7, 5),
        new Tile("highlight", 7, 6),
        new Tile("highlight", 7, 7),
      ])
    );
  }

  static roomTemplates: RoomTemplate[] = [
    new RoomTemplate(RoomLayout.leftRight, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 0, 4),
      new Tile("ground", 0, 5),
      new Tile("ground", 0, 6),
      new Tile("ground", 0, 7),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 1, 4),
      new Tile("ground", 1, 5),
      new Tile("ground", 1, 6),
      new Tile("ground", 1, 7),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 2, 4),
      new Tile("ground", 2, 5),
      new Tile("ground", 2, 6),
      new Tile("ground", 2, 7),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
      new Tile("ground", 3, 4),
      new Tile("ground", 3, 5),
      new Tile("ground", 3, 6),
      new Tile("ground", 3, 7),
      new Tile("ground", 4, 0),
      new Tile("ground", 4, 1),
      new Tile("ground", 4, 2),
      new Tile("ground", 4, 3),
      new Tile("ground", 4, 4),
      new Tile("ground", 4, 5),
      new Tile("ground", 4, 6),
      new Tile("ground", 4, 7),
      new Tile("ground", 5, 0),
      new Tile("ground", 5, 1),
      new Tile("ground", 5, 2),
      new Tile("ground", 5, 3),
      new Tile("ground", 5, 4),
      new Tile("ground", 5, 5),
      new Tile("ground", 5, 6),
      new Tile("ground", 5, 7),
      new Tile("ground", 6, 0),
      new Tile("ground", 6, 1),
      new Tile("ground", 6, 2),
      new Tile("ground", 6, 3),
      new Tile("ground", 6, 4),
      new Tile("ground", 6, 5),
      new Tile("ground", 6, 6),
      new Tile("ground", 6, 7),
      new Tile("ground", 7, 0),
      new Tile("ground", 7, 1),
      new Tile("ground", 7, 2),
      new Tile("ground", 7, 3),
      new Tile("ground", 7, 4),
      new Tile("ground", 7, 5),
      new Tile("ground", 7, 6),
      new Tile("ground", 7, 7),
    ]),
    new RoomTemplate(RoomLayout.entranceCeiling, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 0, 4),
      new Tile("ground", 0, 5),
      new Tile("ground", 0, 6),
      new Tile("ground", 0, 7),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 1, 4),
      new Tile("ground", 1, 5),
      new Tile("ground", 1, 6),
      new Tile("ground", 1, 7),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 2, 4),
      new Tile("ground", 2, 5),
      new Tile("ground", 2, 6),
      new Tile("ground", 2, 7),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
      new Tile("ground", 3, 4),
      new Tile("ground", 3, 5),
      new Tile("ground", 3, 6),
      new Tile("ground", 3, 7),
      new Tile("ground", 4, 0),
      new Tile("ground", 4, 1),
      new Tile("ground", 4, 2),
      new Tile("ground", 4, 3),
      new Tile("ground", 4, 4),
      new Tile("ground", 4, 5),
      new Tile("ground", 4, 6),
      new Tile("ground", 4, 7),
      new Tile("ground", 5, 0),
      new Tile("ground", 5, 1),
      new Tile("ground", 5, 2),
      new Tile("ground", 5, 3),
      new Tile("ground", 5, 4),
      new Tile("ground", 5, 5),
      new Tile("ground", 5, 6),
      new Tile("ground", 5, 7),
      new Tile("ground", 6, 0),
      new Tile("ground", 6, 1),
      new Tile("ground", 6, 2),
      new Tile("ground", 6, 3),
      new Tile("ground", 6, 4),
      new Tile("ground", 6, 5),
      new Tile("ground", 6, 6),
      new Tile("ground", 6, 7),
      new Tile("ground", 7, 0),
      new Tile("ground", 7, 1),
      new Tile("ground", 7, 2),
      new Tile("ground", 7, 3),
      new Tile("ground", 7, 4),
      new Tile("ground", 7, 5),
      new Tile("ground", 7, 6),
      new Tile("ground", 7, 7),
    ]),
    new RoomTemplate(RoomLayout.exitFloor, [
      new Tile("ground", 0, 0),
      new Tile("ground", 0, 1),
      new Tile("ground", 0, 2),
      new Tile("ground", 0, 3),
      new Tile("ground", 0, 4),
      new Tile("ground", 0, 5),
      new Tile("ground", 0, 6),
      new Tile("ground", 0, 7),
      new Tile("ground", 1, 0),
      new Tile("ground", 1, 1),
      new Tile("ground", 1, 2),
      new Tile("ground", 1, 3),
      new Tile("ground", 1, 4),
      new Tile("ground", 1, 5),
      new Tile("ground", 1, 6),
      new Tile("ground", 1, 7),
      new Tile("ground", 2, 0),
      new Tile("ground", 2, 1),
      new Tile("ground", 2, 2),
      new Tile("ground", 2, 3),
      new Tile("ground", 2, 4),
      new Tile("ground", 2, 5),
      new Tile("ground", 2, 6),
      new Tile("ground", 2, 7),
      new Tile("ground", 3, 0),
      new Tile("ground", 3, 1),
      new Tile("ground", 3, 2),
      new Tile("ground", 3, 3),
      new Tile("ground", 3, 4),
      new Tile("ground", 3, 5),
      new Tile("ground", 3, 6),
      new Tile("ground", 3, 7),
      new Tile("ground", 4, 0),
      new Tile("ground", 4, 1),
      new Tile("ground", 4, 2),
      new Tile("ground", 4, 3),
      new Tile("ground", 4, 4),
      new Tile("ground", 4, 5),
      new Tile("ground", 4, 6),
      new Tile("ground", 4, 7),
      new Tile("ground", 5, 0),
      new Tile("ground", 5, 1),
      new Tile("ground", 5, 2),
      new Tile("ground", 5, 3),
      new Tile("ground", 5, 4),
      new Tile("ground", 5, 5),
      new Tile("ground", 5, 6),
      new Tile("ground", 5, 7),
      new Tile("ground", 6, 0),
      new Tile("ground", 6, 1),
      new Tile("ground", 6, 2),
      new Tile("ground", 6, 3),
      new Tile("ground", 6, 4),
      new Tile("ground", 6, 5),
      new Tile("ground", 6, 6),
      new Tile("ground", 6, 7),
      new Tile("ground", 7, 0),
      new Tile("ground", 7, 1),
      new Tile("ground", 7, 2),
      new Tile("ground", 7, 3),
      new Tile("ground", 7, 4),
      new Tile("ground", 7, 5),
      new Tile("ground", 7, 6),
      new Tile("ground", 7, 7),
    ]),
  ];
}
