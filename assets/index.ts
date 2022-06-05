export const tiles = {
  default: {
    desert: {
      ground: {
        uri: require("./default/tiles/desert/ground.png"),
      },
      highlight: {
        uri: require("./default/tiles/desert/highlight.png"),
      },
    },
    dungeon: {
      ground: {
        uri: require("./default/tiles/dungeon/ground.png"),
      },
      highlight: {
        uri: require("./default/tiles/dungeon/highlight.png"),
      },
    },
    plains: {
      ground: {
        uri: require("./default/tiles/plains/ground.png"),
      },
      highlight: {
        uri: require("./default/tiles/plains/highlight.png"),
      },
    },
  },
};

export const rooms = {
  default: {
    isolated: {
      uri: require("./default/rooms/isolated.png"),
    },
    leftRight: {
      uri: require("./default/rooms/leftRight.png"),
    },
    entranceTop: {
      uri: require("./default/rooms/entranceTop.png"),
    },
    exitBottom: {
      uri: require("./default/rooms/exitBottom.png"),
    },
  },
};

export const objects = {
  default: {
    players: {
      player: {
        left_down: {
          uri: require("./default/objects/players/player/left_down.png"),
        },
      },
    },
  },
};
