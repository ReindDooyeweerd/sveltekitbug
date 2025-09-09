import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const fetchedDataRequest = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
	const fetchedDataResponse = await fetchedDataRequest.json();
	const fetchedData = fetchedDataResponse;

	return {
		fetchedData
	};
};
