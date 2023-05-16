<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	export let data;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppBar>
			{#each data.teams as team}
				<ul class="list">
					<li>
						<nav>
							<a href="/{team}">{team}</a>
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
