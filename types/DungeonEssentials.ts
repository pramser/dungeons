import { rooms } from "../assets";
import Math from "./Math";

export enum FloorSize {
  tiny = 4,
  small = 8,
  standard = 16,
  large = 24,
}

export enum PortalType {
  none = 0,
  entrance = 1,
  exit = 2,
}

export enum RoomLayout {
  isolated = 0,
  leftRight = 1,
  exitBottom = 2,
  entranceTop = 3,
}

export enum RoomSize {
  tiny = 2,
  small = 4,
  normal = 8,
  large = 16,
}

export class Room {
  readonly x: number;
  readonly y: number;
  readonly layout: RoomLayout;

  portalType: PortalType = 0;

  uri: any = null;

  constructor(x: number, y: number, layout: RoomLayout) {
    this.x = x;
    this.y = y;
    this.layout = layout;
  }

  describe(): string {
    return `room (${this.x}, ${this.y})`;
  }

  getAbsolutePosition() {
    return Math.convertToIso(this.x, this.y, 256);
  }

  isPortal() {
    return this.portalType > 0;
  }

  loadUri(uri: any): void {
    this.uri = uri;
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
