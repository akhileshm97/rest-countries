<script>
	import data from "$lib/data.json";
  import { currentItems } from "./stores";

	let selectedRegion = ''
	let searchTerm = ''
	const regions = [...new Set(data.map(country => country.region))]

	currentItems.set(data)

	function filterCountries(e) {
		const items = data.filter(item => {
			if(selectedRegion) {
				if((item.region === selectedRegion) && item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
					return true
				} else {
					return false
				}
			} else {
				if(item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
					return true
				} else {
					return false
				}
			}
		})

		currentItems.set(items)
	}
</script>

<div class="filters">
	<form on:submit={filterCountries}>
		<div class="filter">
			<label for="region">Region</label>
			<select bind:value={selectedRegion} id="region">
				{#each regions as region}
					<option value={region}>{region}</option>
				{/each}
					<option value='' selected>All</option>
			</select>
		</div>

		<div class="filter">
			<label for="search-term">Country name</label>
			<input type="text" name="search-term" bind:value={searchTerm}>
		</div>

		<button type="submit">Filter</button>
	</form>
</div>

<style>
	.filters {
		/*position: sticky;*/
		/*top: 0;*/
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background-color: black;
/*		border: 2px solid white;*/
		border-radius: 0.25em;
		margin: auto;
	}

	form {
		position: fixed;
		top: 0;
		padding: 1rem;
	}

	.filter {
/*		background-color: #333333;*/
		padding: 0.5rem 1rem;
/*		border: 2px solid #444444;*/
		border-radius: 0.25em;
		box-shadow: 0 0 8px 0 #444444;
	}

	select, input {
		width: auto;
		margin: 0.5rem auto;
	}
</style>
