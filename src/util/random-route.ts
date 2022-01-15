import type { Route } from "zwift-data";
import { routes } from "zwift-data";
import { randomItem } from "./random";

export function getRandomRoute(): Route {
  const routesWithSegments = routes.filter((r) => r.stravaSegmentId);
  return randomItem(routesWithSegments);
}

export function getAnswers(correctRoute: Route): Route[] {
  const answers = [correctRoute];

  const routesInSameWorld = routes
    .filter((r) => r.world === correctRoute.world)
    .filter((r) => r !== correctRoute);

  if (routesInSameWorld.length < 2) {
    answers.push(...routesInSameWorld);
  } else {
    while (answers.length < 3) {
      const newRoute = randomItem(routesInSameWorld);
      if (answers.includes(newRoute)) {
        continue;
      }
      answers.push(newRoute);
    }
  }

  const routesInOtherWorld = routes.filter(
    (r) => r.world !== correctRoute.world
  );
  while (answers.length < 4) {
    const newRoute = randomItem(routesInOtherWorld);
    if (answers.includes(newRoute)) {
      continue;
    }
    answers.push(newRoute);
  }

  return answers;
}
