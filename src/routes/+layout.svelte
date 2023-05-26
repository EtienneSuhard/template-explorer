<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	export let data;

	var teams: string[];
	onMount(async () => {
		teams = data.teams;
	});
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppBar>
			{#each teams as team}
				<ul class="list">
					<li>
						<nav>
							<a rel="external" href="/{team}">{team}</a>
						</nav>
					</li>
				</ul>
			{/each}
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
