import { rooms } from "../assets";

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
  exitBottom = 2,
  entranceTop = 3,
}

export enum PortalType {
  none = 0,
  entrance = 1,
  exit = 2,
}

export class Room {
  readonly floorX: number;
  readonly floorY: number;
  readonly layout: RoomLayout;

  portalType: PortalType = 0;

  uri: any = null;

  constructor(floorX: number, floorY: number, layout: RoomLayout) {
    this.floorX = floorX;
    this.floorY = floorY;
    this.layout = layout;
  }

  loadUri(uri: any): void {
    this.uri = uri;
  }

  isPortal() {
    return this.portalType > 0;
  }

  describe(): string {
    return `x: ${this.floorX} y: ${this.floorY}`;
  }
}

export class RoomTemplate {
  readonly layout: RoomLayout;
  readonly uri: any;

  constructor(layout: RoomLayout, uri: any) {
    this.layout = layout;
    this.uri = uri;
  }
}

export class RoomTemplates {
  static find(layout: RoomLayout): RoomTemplate {
    return (
      this.roomTemplates.find((template) => template.layout === layout) ??
      new RoomTemplate(RoomLayout.isolated, rooms.default.isolated.uri)
    );
  }

  static roomTemplates: RoomTemplate[] = [
    new RoomTemplate(RoomLayout.leftRight, rooms.default.leftRight.uri),
    new RoomTemplate(RoomLayout.entranceTop, rooms.default.entranceTop.uri),
    new RoomTemplate(RoomLayout.exitBottom, rooms.default.exitBottom.uri),
  ];
}
