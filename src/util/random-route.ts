import type { Route } from "zwift-data";
import { routes } from "zwift-data";

export function getRandomRoute(): Route {
  const routesWithSegments = routes.filter((r) => r.stravaSegmentId);
  return routesWithSegments[
    Math.floor(Math.random() * routesWithSegments.length)
  ];
}
