import FloorGenerator from "./FloorGenerator";
import { Room } from "./RoomEssentials";

export class GameData {
  entRoom: any = {};
  exitRoom: any = {};
  floorSize: number = 0;
  player: any;
  rooms2d: Room[][] = [];
  roomSize: number = 0;
  set: string = "";
  type: string = "";
}

export default class GameManager {
  // dungeon config
  readonly floorSize: number;
  readonly roomSize: number;
  readonly set: string;
  readonly type: string;

  // game data
  readonly data?: GameData;

  constructor(floorSize: number, roomSize: number, set: string, type: string) {
    this.floorSize = floorSize;
    this.roomSize = roomSize;
    this.set = set;
    this.type = type;

    this.data = undefined;
  }

  createGame(): GameData {
    let floorGenerator = new FloorGenerator();
    let floorData = floorGenerator.generate(this.floorSize);

    return {
      entRoom: floorData.entranceRoom,
      exitRoom: floorData.exitRoom,
      floorSize: this.floorSize,
      player: {},
      rooms2d: floorData.rooms,
      roomSize: this.roomSize,
      set: this.set,
      type: this.type,
    };
  }

  saveGame() {
    // implement later
  }

  loadGame() {
    // implement later
  }
}
