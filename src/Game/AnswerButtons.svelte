<script lang="ts">
  import arrayShuffle from "array-shuffle";
  import { createEventDispatcher } from "svelte";
  import type { Route } from "zwift-data";
  import { getRandomRoute } from "../util/random-route";

  export let correctRoute: Route;
  export let selectedRoute: Route | undefined;

  $: revealed = selectedRoute !== undefined;

  const dispatch = createEventDispatcher();

  const routes = [correctRoute];
  while (routes.length < 4) {
    const newRoute = getRandomRoute();
    if (routes.includes(newRoute)) {
      continue;
    }
    routes.push(newRoute);
  }

  $: shuffledRoutes = arrayShuffle(routes);

  function selectRoute(selectedRoute: Route) {
    dispatch("select", { selectedRoute });
  }
</script>

<div class="flex flex-col gap-4 w-3/4 mx-auto">
  {#each shuffledRoutes as route}
    <button
      type="button"
      class="rounded bg-indigo-500 text-white p-2"
      class:hover:bg-indigo-800={!revealed}
      class:bg-indigo-300={revealed &&
        route !== correctRoute &&
        route !== selectedRoute}
      class:bg-green-500={revealed && route === correctRoute}
      class:bg-rose-500={revealed &&
        route === selectedRoute &&
        route !== correctRoute}
      disabled={revealed}
      on:click={() => selectRoute(route)}
    >
      {route.name}
    </button>
  {/each}
</div>
