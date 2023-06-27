<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	export let data;
</script>

<AppShell>
	<!-- Native Table Element -->
	<ol class="breadcrumb m-4">
		<li class="crumb"><a class="anchor" href="/{data.jsonDatas.team}">{data.jsonDatas.code}</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Tableau</li>
	</ol>
	<table class="table table-hover gap-4 mx-4 my-4">
		<thead>
			<tr>
				<th>templateId</th>
				<th>businessProviderCode</th>
				<th>businessUnitCode</th>
				<th>channelType</th>
				<th>partnerCode</th>
				<th>productCode</th>
			</tr>
		</thead>
		<tbody>
			{#each data.jsonDatas.configuration as row, i}
				<tr>
					<td>
						<a href="/{data.jsonDatas.team}/{data.jsonDatas.code}/{row.templateId}">
							{row.templateId}</a
						>
					</td>
					<td>{row.businessProviderCode}</td>
					<td>{row.businessUnitCode}</td>
					<td>{row.channelType}</td>
					<td>{row.partnerCode}</td>
					<td>{row.productCode}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</AppShell>
