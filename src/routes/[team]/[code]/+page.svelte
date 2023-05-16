<script>
	import { AppShell, Table } from '@skeletonlabs/skeleton';

	export let data;
</script>

<AppShell>
	<script>
		import { AppShell, Table } from '@skeletonlabs/skeleton';

		export let data;
	</script>

	<AppShell>
		<!-- Responsive Container (recommended) -->
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>BusinessProviderCode</th>
						<th>BusinessUnitCode</th>
						<th>CommunicationType</th>
						<th>PartnerCode</th>
						<th>ProductCode</th>
						<th>TemplateId</th>
					</tr>
				</thead>
				<tbody>
					{#each data.values as row, i}
						<tr>
							<td>{row.businessProviderCode}</td>
							<td>{row.businessUnitCode}</td>
							<td>{row.communicationType}</td>
							<td>{row.partnerCode}</td>
							<td>{row.productCode}</td>
							<td>{row.templateId}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</AppShell>

	<!--<Table source={data.tableSimple} /> -->
</AppShell>
