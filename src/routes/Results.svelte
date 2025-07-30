<script>
	import { fade, fly } from 'svelte/transition';

	import CountryCard from "./CountryCard.svelte";

  import { currentItems } from "./stores";
</script>

{#key $currentItems}
	<section
		in:fade={{ x: -50, duration: 200, delay: 200 }}
		out:fade={{ x: -50, duration: 200 }}
	>
		{#each $currentItems as item}
			<CountryCard country={item} />
		{/each}

		{#if $currentItems.length === 0}
			<p>No results found</p>
		{/if}
	</section>
{/key}

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 3fr));
		gap: 2rem;
		/*place-content: center;*/
		margin: 2rem auto;
		padding: 2rem;
	}

	p {
		grid-column: 1 / 3;
		text-align: center;
	}
</style>