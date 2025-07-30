<script>
	import { spring } from 'svelte/motion'
	export let country

	// const opacity = spring(1)

	let overlayed = false
</script>

<!-- <a href={`/country/${country.alpha3Code}`}> -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- </a> -->

	<!-- style:opacity={overlayed ? 0.5 : 1} -->
	<!-- on:click={() => overlayed = !overlayed} -->
<div 
	class="country-card"
>
	<img src={country.flags.svg} alt="Flag of {country.name}" />
	<h2>{country.name}</h2>

	<!-- {#if overlayed} -->
		
	<div class="overlay">
		<dl>
			<div class='detail'>
				<dt>Population: </dt>
				<dd>{country.population}</dd>
			</div>
			<div class='detail'>
				<dt>Region: </dt>
				<dd>{country.region}</dd>
			</div>
			<div class='detail'>
				<dt>Capital: </dt>
				<dd>{country.capital ?? "doesn't exist"}</dd>
			</div>
		</dl>
	</div>
	<!-- {/if} -->
</div>

<style>
	.country-card {
		background-color: transparent;
/*		border: 1px solid #444444;*/
		border-radius: 4px;
/*		aspect-ratio: 3 / 2;*/
		box-shadow: 0 0 4px 0 #444444;
		overflow: hidden;
		/*user-select: none;*/
		/*cursor: pointer;*/
	}

/*	a {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}*/

	img {
		max-width: 100%;
		object-fit: scale-down;
		aspect-ratio: 3 / 2;
/*		width: 100%;*/
/*		height: 100%;*/
	}

	.overlay {
		padding: 1rem;
	}

	h2 {
		font-weight: 600;
		font-size: 1.25rem;
		margin: 0.5rem auto;
		text-align: center;
	}

	dt, dd {
		display: inline;
		margin: 0;
	}

	dt {
		font-weight: 700;
	}
</style>