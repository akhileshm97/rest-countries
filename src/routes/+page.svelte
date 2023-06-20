<script>
  import { Link, OutboundLink } from "carbon-components-svelte";
</script>

<section>
	<h1>Country Info</h1>
	<p>This project is built using 
		<OutboundLink href="https://restcountries.com/">
			REST COUNTRIES API
		</OutboundLink>
		 as part of this 
		<OutboundLink href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca">
			Frontend Mentor challenge
		</OutboundLink>
	</p>

	<div>
		<p>Check out country list:</p>
		<Link size="lg" href="/country">Country List</Link>
	</div>
</section>

<style>
	section {
		display: grid;
		place-content: center;
	}

	p {
		max-width: 75ch;
	}
</style>