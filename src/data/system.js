const epyllion = {
  id: "epyllion",
  name: "Epyllion",
  getLlevelInfo: function(level) {
    let levelName;
    let steps;

    switch (level) {
      case 1:
        levelName = "Raw Scaled Drake";
        steps = 5;
        break;
      case 2:
        levelName = "Winged Drake";
        steps = 4;
        break;
      case 3:
        levelName = "Long Toothed Dragon";
        steps = 4;
        break;
      case 4:
        levelName = "Bearded Dragon";
        steps = 3;
        break;
      case 5:
        levelName = "Elder Dragon";
        steps = 3;
        break;
      case 6:
        levelName = "Mystic/Ancient Dragon";
        steps = 0;
        break;
      default:
        steps = 0;
    }

    return {
      levelName,
      steps
    };
  },
  getCurrentXP(xp, level) {
    let currentXP = xp;
    if (level > 1) {
      currentXP -= 3 * 5;
    }
    if (level > 2) {
      currentXP -= 3 * 4;
    }
    if (level > 3) {
      currentXP -= 3 * 4;
    }
    if (level > 4) {
      currentXP -= 3 * 3;
    }

    return currentXP;
  }
};

export function getSystemConfig(id) {
  switch (id) {
    case "epyllion":
      return epyllion;
    default:
      console.error("Unknown system: ", id);
      return {};
  }
}
