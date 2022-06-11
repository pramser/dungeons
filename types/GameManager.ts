import DungeonGenerator from "./DungeonGenerator";
import { Room } from "./DungeonEssentials";

export class GameData {
  entRoom: any = {};
  exitRoom: any = {};
  floorSize: number = 0;
  players: any[] = [];
  rooms2d: Room[][] = [];
  roomSize: number = 0;
  set: string = "";
  startingTurn: number = 0;
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
    let dungeonGenerator = new DungeonGenerator();
    let floorData = dungeonGenerator.generate(this.floorSize);

    return {
      entRoom: floorData.entranceRoom,
      exitRoom: floorData.exitRoom,
      floorSize: this.floorSize,
      players: [
        { acctId: 1, playerId: 1, charName: "Patrick", asset: "blue", dex: 5 },
        { acctId: 2, playerId: 2, charName: "Jon", asset: "red", dex: 3 },
      ],
      rooms2d: floorData.rooms,
      roomSize: this.roomSize,
      set: this.set,
      startingTurn: 0,
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
