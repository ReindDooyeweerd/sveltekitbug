<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<hr />
<h3>Layout data</h3>
<pre>{JSON.stringify(data, null, 2)}</pre>
