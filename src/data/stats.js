import { faCloudMoon, faHeart, faEye, faFistRaised, faBook, faMoon } from "@fortawesome/pro-solid-svg-icons";

export const epyllionStats = {
	"epyllion/charm": {
    id: "epyllion/charm",
    name: "Charm",
    icon: faHeart
  },
  "epyllion/courage": {
    id: "epyllion/courage",
    name: "Courage",
    icon: faFistRaised
  },
  "epyllion/cunning": {
    id: "epyllion/cunning",
    name: "Cunning",
    icon: faEye
  },
  "epyllion/moons": {
    id: "epyllion/moons",
    name: "Moons",
    icon: faMoon
  },
  "epyllion/shadows": {
    id: "epyllion/shadows",
    name: "Shadows",
    icon: faCloudMoon
  },
  "epyllion/tomes": {
    id: "epyllion/tomes",
    name: "Tomes",
    icon: faBook
  }
};

export default [
	...Object.keys(epyllionStats)
];
