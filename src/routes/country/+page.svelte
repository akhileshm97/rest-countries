<script>
  import { Select, SelectItem } from "carbon-components-svelte";

	import CountryCard from "./CountryCard.svelte";

	import data from "$lib/data.json";

	const regions = new Set(data.map(country => country.region))
	console.log(regions)

	let region = 'Asia'

	$: currentitems = data.filter(item => item.region === region)

	// export const snapshot = {
	// 	capture: () => region,
	// 	restore: (value) => (region = value)
	// }
</script>

<Select
  labelText="Region"
  bind:selected={region}
>
	{#each [...regions] as region}
	  <SelectItem value={region} />
	{/each}
</Select>

<section>
	{#each currentitems as item}
		<CountryCard country={item} />
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 4fr));
		gap: 2rem;
		place-content: center;
		margin: 2rem auto;
	}
</style>