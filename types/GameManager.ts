import DungeonGenerator from "./DungeonGenerator";
import { Room } from "./DungeonEssentials";

export default class GameManager {
  // dungeon config
  readonly floorSize: number;
  readonly roomSize: number;

  currentTurn: number = 0;
  players: any = [];

  constructor(floorSize: number, roomSize: number) {
    this.floorSize = floorSize;
    this.roomSize = roomSize;
  }

  createGame(): Room[][] {
    let dungeonGenerator = new DungeonGenerator();
    let floorData = dungeonGenerator.generate(this.floorSize);

    this.players = [
      {
        acctId: 1,
        playerId: 1,
        charName: "Patrick",
        asset: "blue",
        stats: {
          exp: 200,
          hp: 100,
          atk: 20,
          speed: 5,
        },
        position: {
          x: 3,
          y: 1,
          roomX: floorData.entranceRoom.x,
          roomY: floorData.entranceRoom.y,
        },
      },
      {
        acctId: 2,
        playerId: 2,
        charName: "Jon",
        asset: "red",
        stats: {
          exp: 200,
          hp: 100,
          atk: 20,
          speed: 3,
        },
        position: {
          x: 3,
          y: 2,
          roomX: floorData.entranceRoom.x,
          roomY: floorData.entranceRoom.y,
        },
      },
    ];

    return floorData.rooms;
  }

  moveActivePlayer(position: any): void {
    this.players[this.currentTurn].position = position;
  }

  nextTurn(): void {
    this.currentTurn = this.currentTurn === 0 ? 1 : 0;
  }

  activePlayer(): any {
    return this.players[this.currentTurn];
  }

  saveGame() {
    // implement later
  }

  loadGame() {
    // implement later
  }
}
