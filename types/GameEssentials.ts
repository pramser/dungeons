import Math from "./Math";

export class Position {
  x: number;
  y: number;
  roomX: number;
  roomY: number;

  constructor(x: number, y: number, roomX: number, roomY: number) {
    this.x = x;
    this.y = y;
    this.roomX = roomX;
    this.roomY = roomY;
  }

  getAbsolutePosition(scaleInPixels: number) {
    return Math.getRoomPos(
      this.x,
      this.y,
      this.roomX,
      this.roomY,
      scaleInPixels
    );
  }

  static new(x: number, y: number, roomX: number, roomY: number): Position {
    return new Position(x, y, roomX, roomY);
  }

  move(partial: any) {
    if (partial.x) {
      this.x = partial.x;
    }

    if (partial.y) {
      this.y = partial.y;
    }

    if (partial.roomX) {
      this.roomX = partial.roomX;
    }

    if (partial.roomY) {
      this.roomY = partial.roomY;
    }
  }
}

interface IGameObject {
  position: Position;
  isVisible: boolean;
  isSolid: boolean;

  describe(): string;
}

export class GameObject implements IGameObject {
  readonly position: Position;
  readonly isVisible: boolean = false;
  readonly isSolid: boolean = false;

  constructor(startingPosition: Position) {
    this.position = startingPosition;
  }

  describe(): string {
    let aPos = this.position.getAbsolutePosition(32);
    return `object (${aPos.x}, ${aPos.y})`;
  }
}

export class Player implements Object {
  // obj props
  readonly position: Position;
  readonly isVisible: boolean = true;
  readonly isSolid: boolean = true;

  // player props
  readonly asset: string;
  readonly charName: string;
  readonly stats?: any = {
    exp: 200,
    hp: 100,
    atk: 20,
    speed: 5,
  };

  constructor(startingPosition: Position, asset: string, charName: string) {
    this.position = startingPosition;

    this.asset = asset;
    this.charName = charName;
  }

  describe(): string {
    let aPos = this.position.getAbsolutePosition(32);
    return `player (${aPos.x}, ${aPos.y})`;
  }
}

export class Item implements Object {
  readonly position: Position;
  readonly isVisible: boolean = true;
  readonly isSolid: boolean = true;

  readonly description: string;

  constructor(startingPosition: Position, description: string) {
    this.position = startingPosition;
    this.description = description;
  }

  describe(): string {
    let aPos = this.position.getAbsolutePosition(32);
    return `item (${aPos.x}, ${aPos.y})`;
  }
}
