<script lang="ts">
  import Game from "./Game/index.svelte";
</script>

<div class="flex flex-col gap-4 w-full max-w-screen-md mx-auto px-2 py-10">
  <header>
    <h1 class="text-6xl text-center">Zwift Quiz</h1>
  </header>

  <main class="flex flex-col gap-4">
    <Game />
  </main>

  <footer class="text-center text-sm text-slate-500 mt">
    Made with ♥ by{" "}
    <a
      href="mailto:zwiftquiz@andipaetzold.com"
      rel="noopener noreferrer"
      target="_blank"
      class="hover:underline"
    >
      Andi P&auml;tzold
    </a>
    <br />
    This website is not affiliated to
    <a
      href="https://zwift.com"
      rel="noopener noreferrer"
      target="_blank"
      class="hover:underline"
    >
      Zwift
    </a>
  </footer>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
