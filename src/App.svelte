<script lang="ts">
  import Game from "./screens/Game/index.svelte";
  import Home from "./screens/Home.svelte";

  let screen: "home" | "game" = "home";
</script>

{#if screen === "home"}
  <Home on:start={() => (screen = "game")} />
{:else}
  <Game />
{/if}
