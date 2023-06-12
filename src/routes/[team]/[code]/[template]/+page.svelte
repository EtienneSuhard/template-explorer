<script lang="ts">
	import { templates } from '$lib/templatesjson/templates';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	export let data;
	let tabSet: number = 0;
</script>

<AppShell>
	<ol class=" breadcrumb gap-4 m-4">
		<li class="crumb"><a class="anchor" href="/{data.jsonDatas.team}">Code</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li class="crumb">
			<a class="anchor" href="/{data.jsonDatas.team}/{data.jsonDatas.code}">Tableau</a>
		</li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Template</li>
	</ol>

	<div>
		<div class="gap-4 m-6">
			<h2 class="my-4">Template</h2>
			{#each data.jsonDatas.configuration as configuration}
				<div class="mt-6 flex w-50">
					<dl class="grid grid-cols-2">
						<div class="border-r">
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Business provider code</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-20">
									{configuration.businessProviderCode}
								</dd>
							</div>
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y-collapse mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Partner code</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{configuration.partnerCode}
								</dd>
							</div>
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Channel type</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{configuration.channelType}
								</dd>
							</div>
						</div>
						<div>
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Business unit code</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{configuration.businessUnitCode}
								</dd>
							</div>
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y-collapse mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Product code</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{configuration.productCode}
								</dd>
							</div>
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Template id</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{configuration.templateId}
								</dd>
							</div>
						</div>
					</dl>
				</div>
			{/each}
		</div>
		<div class="gap-4 m-6">
			<h2 class="my-4">Np6</h2>
			<div class="mt-6 flex w-50">
				<dl class="grid grid-rows-4">
					<div class="grid grid-cols-3 border-t mx-4">
						<div class="my-4 border-r">
							<div class="py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0 mx-4">
								<dt class="mx-1 font-medium leading-6">Name</dt>
								<dd class="mt-1 leading-6 text-gray-500 sm:col-span-3 sm:mt-0">
									{data.api.np6Action.name}
								</dd>
							</div>
						</div>
						<div class="my-4 border-r">
							<div class="py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0 mx-4">
								<dt class="mx-6 font-medium leading-6">Status</dt>
								<dd class="mx-6 mt-1 leading-6 text-gray-500 sm:col-span-3 sm:mt-0">
									{data.api.np6Action.status}
								</dd>
							</div>
						</div>
						<div class="my-4">
							<div class="py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0 mx-4">
								<dt class="mx-6 font-medium leading-6">Culture</dt>
								<dd class="mx-6 mt-1 leading-6 text-gray-500 sm:col-span-3 sm:mt-0">
									{data.api.np6Action.culture}
								</dd>
							</div>
						</div>
					</div>
					<div class="py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0 border-y mx-4">
						<dt class="m-4 font-medium leading-6">Description</dt>
						<dd class="m-4 leading-6 text-gray-500 sm:col-span-5">
							{data.api.np6Action.description}
						</dd>
					</div>
					<div class="py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0 border-y-collapse mx-4">
						<dt class="m-4 font-medium leading-6">From</dt>
						<dd class="m-4 leading-6 text-gray-500 sm:col-span-5">
							{data.api.np6Action.from}
						</dd>
					</div>
					<div class="py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0 border-y mx-4">
						<dt class="m-4 font-medium leading-6">Reply</dt>
						<dd class="m-4 leading-6 text-gray-500 sm:col-span-5">
							{data.api.np6Action.reply}
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<div>
			<TabGroup>
				<Tab bind:group={tabSet} name="HTMLformatted" value={0}>HTML formatted</Tab>
				<Tab bind:group={tabSet} name="HTMLrow" value={1}>HTML row</Tab>
				<Tab bind:group={tabSet} name="text" value={2}>Text</Tab>

				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						{data.api.emailContent.htmlFormatted}
					{:else if tabSet === 1}
						{data.api.emailContent.htmlRaw}
					{:else if tabSet === 2}
						{data.api.emailContent.text}
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</AppShell>
