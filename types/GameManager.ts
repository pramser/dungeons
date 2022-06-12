import DungeonGenerator from "./DungeonGenerator";
import { Room } from "./DungeonEssentials";
import { Player, Position } from "./GameEssentials";

export default class GameManager {
  // dungeon config
  readonly floorSize: number;
  readonly roomSize: number;

  currentTurn: number = 0;
  players: Player[] = [];

  constructor(floorSize: number, roomSize: number) {
    this.floorSize = floorSize;
    this.roomSize = roomSize;
  }

  createGame(): Room[][] {
    // floor data
    let dungeonGenerator = new DungeonGenerator();
    let floorData = dungeonGenerator.generate(this.floorSize);

    // players
    let patrick = new Player(
      Position.new(3, 1, floorData.entranceRoom.x, floorData.entranceRoom.y),
      "blue",
      "Patrick"
    );

    let jon = new Player(
      Position.new(4, 1, floorData.entranceRoom.x, floorData.entranceRoom.y),
      "red",
      "Jon"
    );

    this.players = [patrick, jon];
    return floorData.rooms;
  }

  moveActivePlayer(partial: any): void {
    this.players[this.currentTurn].position.move(partial);
  }

  nextTurn(): void {
    this.currentTurn = this.currentTurn === 0 ? 1 : 0;
  }

  activePlayer(): Player {
    return this.players[this.currentTurn];
  }

  saveGame() {
    // implement later
  }

  loadGame() {
    // implement later
  }
}
