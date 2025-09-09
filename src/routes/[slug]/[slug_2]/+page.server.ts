// Import Svelte components
import { error } from '@sveltejs/kit';

// Import types
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const fetchedPageDataRequest = await fetch(`https://jsonplaceholder.typicode.com/todos/999`);
	const fetchedPageDataResponse = await fetchedPageDataRequest.json();
	const fetchedPageData = fetchedPageDataResponse;

	if (!fetchedPageData || Object.keys(fetchedPageData).length === 0) {
		error(404, 'Page not found');
	}

	return {
		fetchedPageData
	};
};
