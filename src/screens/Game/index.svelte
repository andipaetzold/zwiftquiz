<script lang="ts">
  import Question from "./Question.svelte";

  const TOTAL_ROUNDS = 5;

  let phase: "question" | "answered" = "question";
  let points = 0;
  let round = 0;

  function handleSelect(event: CustomEvent<{ correct: boolean }>) {
    if (event.detail.correct) {
      points += 1;
    }
    phase = "answered";
  }

  function handleNext() {
    round += 1;
    phase = "question";
  }
</script>

Points: {round}

{#if phase === "question"}
  <Question on:answer={handleSelect} />
{:else}
  <button type="button" on:click={handleNext}>Next</button>
{/if}
