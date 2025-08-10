<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Habitica Priority Matrix</title>
	<link rel="icon" href={favicon} />

	<!-- SEO Meta Tags -->
	<meta name="description" content="Automatically organizes your Habitica tasks into a priority matrix, helping you focus on what matters most and manage your time effectively." />
	<meta name="keywords" content="Habitica, priority matrix, task management, productivity, time management, Eisenhower matrix" />
	<meta name="author" content="Nie Tsuki (@nie.0x6708)" />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://nietsuki.github.io/habitica-priority-matrix" />
	<meta property="og:title" content="Habitica Priority Matrix" />
	<meta property="og:description" content="Automatically organizes your Habitica tasks into a priority matrix, helping you focus on what matters most and manage your time effectively." />
	<meta property="og:site_name" content="Habitica Priority Matrix" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content="https://nietsuki.github.io/habitica-priority-matrix" />
	<meta property="twitter:title" content="Habitica Priority Matrix" />
	<meta property="twitter:description" content="Automatically organizes your Habitica tasks into a priority matrix, helping you focus on what matters most and manage your time effectively." />

	<!-- Additional SEO -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href="https://nietsuki.github.io/habitica-priority-matrix" />
</svelte:head>

{@render children?.()}
