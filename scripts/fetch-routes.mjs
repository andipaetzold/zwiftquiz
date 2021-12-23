import { existsSync, mkdirSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import path, { dirname } from "path";
import { routes, segments } from "zwift-data";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BASE_DIR = path.resolve(__dirname, "../public");

if (!existsSync(BASE_DIR)) {
  mkdirSync(BASE_DIR);
}

await Promise.all(
  routes
    .filter((route) => route.stravaSegmentId !== undefined)
    .map((route) => fetchSegment(route))
);

async function fetchSegment({ name, slug, stravaSegmentId }) {
  const response = await fetch(
    `https://www.strava.com/stream/segments/${stravaSegmentId}?streams%5B%5D=latlng`
  );

  if (response.status !== 200) {
    console.error(`Could not fetch segment '${name}'`);
    process.exit(1);
  }

  const stravaData = await response.json();

  const routeDir = `${BASE_DIR}/routes`;
  if (!existsSync(routeDir)) {
    mkdirSync(routeDir, { recursive: true });
  }

  writeFileSync(`${routeDir}/${slug}.json`, JSON.stringify(stravaData.latlng));

  console.log(name);
}
