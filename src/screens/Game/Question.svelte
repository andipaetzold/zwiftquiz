<script lang="ts">
  import arrayShuffle from "array-shuffle";
  import { createEventDispatcher } from "svelte";
  import { routes, Route } from "zwift-data";
  import Map from "./Map.svelte";

  const dispatch = createEventDispatcher();

  const correctRoute = getRandomRoute();
  const allRoutes = [correctRoute];
  while (allRoutes.length < 4) {
    const newRoute = getRandomRoute();
    if (allRoutes.includes(newRoute)) {
      continue;
    }
    allRoutes.push(newRoute);
  }
  $: shuffledRoutes = arrayShuffle(allRoutes);

  function selectRoute(selectedRoute: Route) {
    dispatch("answer", { correct: selectedRoute === correctRoute });
  }

  function getRandomRoute(): Route {
    const routesWithSegments = routes.filter((r) => r.stravaSegmentId);
    return routesWithSegments[
      Math.floor(Math.random() * routesWithSegments.length)
    ];
  }
</script>


<Map route={correctRoute} />

<div>
  {#each shuffledRoutes as route}
    <button type="button" on:click={() => selectRoute(route)}>
      {route.name}
    </button>
  {/each}
</div>