import { error } from "@sveltejs/kit";

import data from "$lib/data.json";

export function load({ params }) {
	const country = data.find((item) => item.alpha3Code === params.code);
	return { country };
}
