interface IObject {
  position: any;
  isVisible: boolean;
  isSolid: boolean;
}

export class Object implements IObject {
  readonly position: any;
  readonly isVisible: boolean = false;
  readonly isSolid: boolean = false;
}

export class Player implements Object {
  readonly position: any;
  readonly isVisible: boolean = true;
  readonly isSolid: boolean = true;

  readonly sprite: any;

  constructor(sprite: any) {
    this.sprite = sprite;
  }
}

export class Item implements Object {
  readonly position: any;
  readonly isVisible: boolean = true;
  readonly isSolid: boolean = true;

  readonly sprite: any;
  readonly description: string;

  constructor(sprite: any, description: string) {
    this.sprite = sprite;
    this.description = description;
  }
}
