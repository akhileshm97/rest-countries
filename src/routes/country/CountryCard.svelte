<script>
	import { AspectRatio } from "carbon-components-svelte";

	export let country
</script>

<a href={`/country/${country.alpha3Code}`}>
	<div class="container">
		<AspectRatio ratio="3x2">
			<img src={country.flags.svg} alt="Flag of {country.name}" />
		</AspectRatio>

		<div class="content">
			<h2>{country.name}</h2>

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
	</div>
</a>

<style>
	.container {
		box-shadow: 0 0 4px 0 grey;
		border-radius: 4px;
		overflow: hidden;
	}

	a {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}

	img {
		max-width: 100%;
		object-fit: contain;
	}

	.content {
		padding: 1rem;
	}

	h2 {
		font-weight: 600;
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.detail {
		margin: 0.5rem auto;
	}

	dl {
		margin-bottom: 1.5rem;
	}

	dt, dd {
		display: inline;
	}

	dt {
		font-weight: 600;
	}
</style>