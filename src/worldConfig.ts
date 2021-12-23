import type { WorldSlug } from "zwift-data";

export interface WorldConfig {
  image: string;
  backgroundColor: string;
}

export const worldConfigs: Record<WorldSlug, WorldConfig> = {
  bologna: {
    image: "/maps/bologna.png",
    backgroundColor: "#b9b9b8",
  },
  "crit-city": {
    image: "/maps/crit-city.png",
    backgroundColor: "#7c9938",
  },
  france: {
    image: "/maps/france.png",
    backgroundColor: "#6f992d",
  },
  innsbruck: {
    image: "/maps/innsbruck.png",
    backgroundColor: "#7c9938",
  },
  london: {
    image: "/maps/london.png",
    backgroundColor: "#6f992d",
  },
  "makuri-islands": {
    image: "/maps/makuri-islands.png",
    backgroundColor: "#7d9a35",
  },
  "new-york": {
    image: "/maps/new-york.png",
    backgroundColor: "#bbbbb7",
  },
  paris: {
    image: "/maps/paris.png",
    backgroundColor: "#b9b9b9",
  },
  richmond: {
    image: "/maps/richmond.png",
    backgroundColor: "#7c9938",
  },
  watopia: {
    image: "/maps/watopia.png",
    backgroundColor: "#0884e2",
  },
  yorkshire: {
    image: "/maps/yorkshire.png",
    backgroundColor: "#7c9938",
  },
};
