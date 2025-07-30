<script>
  import Results from "./Results.svelte";
  import FilterPanel from "./FilterPanel.svelte";

  import './global.css'
</script>

<div>
  <FilterPanel />
  <Results />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    /*align-items: center;*/
  }
</style>