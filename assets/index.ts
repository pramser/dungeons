export const rooms: any = {
  default: {
    isolated: { uri: require("./rooms/isolated.png") },
    leftRight: { uri: require("./rooms/leftRight.png") },
    entranceTop: { uri: require("./rooms/entranceTop.png") },
    exitBottom: { uri: require("./rooms/exitBottom.png") },
  },
};

export const people: any = {
  default: {
    blue: {
      ld: { uri: require("./people/blue/left_down.png") },
    },
    green: {
      ld: { uri: require("./people/green/left_down.png") },
    },
    red: {
      ld: { uri: require("./people/red/left_down.png") },
    },
  },
};

export const ui: any = {
  select: {
    atk: { uri: require("./select/atk.png") },
    def: { uri: require("./select/def.png") },
    heal: { uri: require("./select/heal.png") },
    opt: { uri: require("./select/opt.png") },
  },
};
