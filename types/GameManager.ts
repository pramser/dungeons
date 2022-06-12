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
    let ramza = new Player(
      Position.new(3, 1, floorData.entranceRoom.x, floorData.entranceRoom.y),
      "blue",
      "Ramza"
    );

    let petyr = new Player(
      Position.new(4, 1, floorData.entranceRoom.x, floorData.entranceRoom.y),
      "red",
      "Petyr"
    );

    let willem = new Player(
      Position.new(3, 2, floorData.entranceRoom.x, floorData.entranceRoom.y),
      "green",
      "Willem"
    );

    this.players = [ramza, petyr, willem];
    return floorData.rooms;
  }

  moveActivePlayer(partial: any): void {
    this.players[this.currentTurn].position.move(partial);
  }

  nextTurn(): void {
    if (this.currentTurn === this.players.length - 1) {
      this.currentTurn = 0;
      return;
    }

    this.currentTurn++;
  }

  activePlayer(): Player {
    return this.players[this.currentTurn];
  }

  collision(): Position[] {
    return this.players.map((p) => p.position);
  }

  saveGame() {
    // implement later
  }

  loadGame() {
    // implement later
  }
}
