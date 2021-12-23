<script lang="ts">
  import Question from "./Question.svelte";

  let round = 0;
  let phase: "question" | "answered" = "question";

  function handleAnswered() {
    phase = "answered";
  }

  function handleNext() {
    phase = "question";
    round += 1;
  }
</script>

<button
  type="button"
  on:click={handleNext}
  class="rounded bg-indigo-500 hover:bg-indigo-800  text-white p-2"
  class:invisible={phase === "question"}
  disabled={phase === "question"}
>
  Next Route
</button>

{#key round}
  <Question on:answer={handleAnswered} />
{/key}
