<script>
	import { AppShell, Table } from '@skeletonlabs/skeleton';
	export let data;
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
</script>

<AppShell>
	<body data-theme="modern">
		<slot>
			{#each data.codes as code}
				<a href="/{data.thisTeam}/{code}" class="card border border-primary-500/50 p-4">{code}</a>
			{/each}
		</slot>
	</body>
</AppShell>
