<script>
	import { fade, fly } from 'svelte/transition';
	import { Button, Tag, Link, Grid, Row, Column, Content } from "carbon-components-svelte";

	export let data

	$: country = data.country
</script>

{#key country}
	<div
		in:fly={{ x: -50, duration: 250, delay: 250 }}
		out:fly={{ x: 50, duration: 250 }}
	>
		{#if country}
			<Grid padding>
			  <Row>
			    <Column>
			    	<img src={country.flags.svg} alt="Flag of {country.name}" />
			    </Column>
			    <Column>
			    	<Row><h2>{country.name}</h2></Row>

			    	<Row>
			    		<Column>
				    		<dl>
				    			<div class='detail'>
					    			<dt>Native Name: </dt>
					    			<dd>{country.nativeName}</dd>
					    		</div>
				    			<div class='detail'>
					    			<dt>Population: </dt>
					    			<dd>{country.population}</dd>
					    		</div>
				    			<div class='detail'>
					    			<dt>Region: </dt>
					    			<dd>{country.region}</dd>
					    		</div>
				    			<div class='detail'>
					    			<dt>Sub Region: </dt>
					    			<dd>{country.subregion}</dd>
					    		</div>
				    			<div class='detail'>
					    			<dt>Capital: </dt>
					    			<dd>{country.capital}</dd>
					    		</div>
				    		</dl>
				    	</Column>
			    		<Column>
				    		<dl>
				    			<div class='detail'>
					    			<dt>Top Level Domain: </dt>
					    			<dd>{country.topLevelDomain}</dd>
					    		</div>
				    			<div class='detail'>
					    			<dt>Currencies: </dt>
					    			{#if country.currencies}
					    				<dd>{country.currencies.map(c => c.name).join(', ')}</dd>
					    			{:else}
					    				<dd>none</dd>
					    			{/if}
					    		</div>
				    			<div class='detail'>
					    			<dt>Languages: </dt>
					    			{#if country.languages}
					    				<dd>{country.languages.map(l => l.name).join(', ')}</dd>
					    			{:else}
					    				<dd>none</dd>
					    			{/if}
					    		</div>
					    	</dl>
					    </Column>
			    	</Row>

			    	<Row>
							<p>Border Countries: </p>

			    		{#if country.borders}
								{#each country.borders as border}
									<a href={`/country/${border}`} class="country-link">
										{border}
									</a>
								{/each}
		    			{:else}
		    				<p>none</p>
			    		{/if}
				    </Row>
			    </Column>
			  </Row>
			</Grid>
		{:else}
			<p>data not found</p>
		{/if}
	</div>
{/key}

<style>
	img {
		max-width: 100%;
		box-shadow: 0 0 4px 0 grey;
	}

	.detail {
		margin: 0.5rem auto;
	}

	dt, dd {
		display: inline;
	}

	.country-link {
		text-decoration: none;
		font-size: 0.75rem;
		padding: 0.5em 1.5em;
		border-radius: 0.25em;
		box-shadow: 0 0 1px 0 grey;
		margin: 0.25rem;
	}
	.country-link:hover {
		filter: invert();
	}
</style>