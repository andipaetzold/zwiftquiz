<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Route } from "zwift-data";
  import { getRandomRoute } from "../util/random-route";
  import AnswerButtons from "./AnswerButtons.svelte";
  import Map from "./Map.svelte";

  const dispatch = createEventDispatcher();

  let selectedRoute: Route | undefined;
  $: revealed = selectedRoute !== undefined;

  const route = getRandomRoute();

  function handleAnswer(e: CustomEvent<{ selectedRoute: Route }>) {
    selectedRoute = e.detail.selectedRoute;
    dispatch("answer");
  }
</script>

<Map {route} {revealed} />

<AnswerButtons correctRoute={route} {selectedRoute} on:select={handleAnswer} />
