<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onStart() {
    dispatch("start");
  }
</script>

<button type="button" on:click={onStart}>Start</button>
