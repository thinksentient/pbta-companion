export const epyllionPlaybooks = {
  "epyllion/academic": {
    id: "epyllion/academic",
    name: "The Academic",
    baseStats: {
      "epyllion/charm": 0,
      "epyllion/courage": -1,
      "epyllion/cunning": 1
    },
    houseObligation: {
      "epyllion/myndoth":
        "Discover something important about an ancient mystery.",
      "epyllion/semscale":
        "Defuse a tense situation between dragons from different houses."
    },
    description: `YOU WORK HARD to learn as much as you can. Knowledge is power, and you fight to pursue and protect it. Sometimes it is hard to balance your passions for the past with living in the present, but you don’t want to miss out on any adventures…or friendships. After all, the heroes you read about had to put down their parchment and get their scales dirty eventually.`
  },
  "epyllion/crafter": {
    id: "epyllion/crafter",
    name: "The Crafter",
    baseStats: {
      "epyllion/charm": -1,
      "epyllion/courage": 0,
      "epyllion/cunning": 1
    },
    houseObligation: {
      "epyllion/kebros":
        "Put yourself in danger to obtain rare materials or treasures.",
      "epyllion/rothscar":
        "Design something to help a friend solve a tricky problem."
    },
    description: `YOU UNDERSTAND THAT beauty goes beyond a flashy new look, and you know how much hard work and dedication it takes to make great art. But it is important for all great crafters to remember that your trade is a dangerous practice: many like you have fallen to their obsessions. Your friendships will keep you grounded while you pursue perfection.`
  },
  "epyllion/daredevil": {
    id: "epyllion/daredevil",
    name: "The Daredevil",
    baseStats: {
      "epyllion/charm": -1,
      "epyllion/courage": 1,
      "epyllion/cunning": 0
    },
    houseObligation: {
      "epyllion/brynback":
        "Convince a member of your Clutch to undertake a dangerous task.",
      "epyllion/rothscar": "Put yourself in between danger and a Clutchmate."
    },
    description: `THE SKY IS no limit for you. When you shoot for the stars, you  achieve great things you never thought possible. Sometimes the rush can make you lose your head; don’t fly so high that you forget about those who look up to you. Your friendships will give you reasons to fly and all you could ever need to keep your wings and heart busy.`
  },
  "epyllion/nature-adept": {
    id: "epyllion/nature-adept",
    name: "The Nature Adept",
    baseStats: {
      "epyllion/charm": 1,
      "epyllion/courage": -1,
      "epyllion/cunning": 0
    },
    houseObligation: {
      "epyllion/myndoth": "Avoid detection or infiltrate a location.",
      "epyllion/tessith": "Restore a symbol or sanctuary of the wild."
    },
    description: `YOU KNOW THE true splendor of the wilds. Creatures of the land sing a familiar song that reminds you of home, and they hear your roar as they would hear one of their own. But what is Dragonia to you? Can it be your home as well? Only your friendships can help you see the value of dragon culture and realize the promise of living in two worlds.`
  },
  "epyllion/seer": {
    id: "epyllion/seer",
    name: "The Seer",
    baseStats: {
      "epyllion/charm": 1,
      "epyllion/courage": 0,
      "epyllion/cunning": -1
    },
    houseObligation: {
      "epyllion/semscale":
        "Use secret knowledge of the Darkness to aid another.",
      "epyllion/kebros": "Mark a Shadow while engaging the Darkness."
    },
    description: `THE DARKNESS SPOKE to you at an early age. You see the approaching horror and work to fight against it, yet others don’t always trust or believe you. You have grown close to the Darkness to learn its secrets, but do not forget your true allies. Your friendships are the light that keeps you from falling to the Darkness.`
  },
  "epyllion/warrior": {
    id: "epyllion/warrior",
    name: "The Warrior",
    baseStats: {
      "epyllion/charm": 0,
      "epyllion/courage": 1,
      "epyllion/cunning": -1
    },
    houseObligation: {
      "epyllion/brynback": "Destroy an unnatural menace born of Darkness.",
      "epyllion/tessith": "Defend someone weaker than you from the Darkness."
    },
    description: `YOU ARE NOBLE and strong. Dragonia is your home and you fight to defend it. You are an inspiration to your fellow dragons, but don’t try to take on too much by yourself. Your friends are strong and capable; give them a chance and they will surprise you.`
  }
};

export default [...Object.keys(epyllionPlaybooks)];
