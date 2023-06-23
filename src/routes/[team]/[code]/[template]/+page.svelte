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
		<div class="gap-4 m-6 appearance-none">
			<h2 class="m-8">Template</h2>
			{#each data.jsonDatas.configuration as configuration}
				<div class="mt-6 mx-4">
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
			<h2 class="m-8">Np6</h2>
			<div class="grid grid-cols-2 mx-4 flex">
				<div class="border-r">
					<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
						<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Name</dt>
						<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
							{data.api.name}
						</dd>
					</div>
				</div>
				<div class="">
					<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-y mx-4">
						<dt class="mx-6 my-4 font-medium leading-6">Status</dt>
						<dd class="mx-6 py-4 leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
							{data.api.status}
						</dd>
					</div>
				</div>
			</div>
			{#if data.api.type === 'Email'}
				<dl class="grid grid-rows-3">
					<div class="grid grid-cols-2 mx-4">
						<div class="border-r">
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">From</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-2">
									{data.api.content.from}
								</dd>
							</div>
						</div>
						<div class="">
							<div class="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b mx-4">
								<dt class="mx-6 my-4 font-medium leading-6">Reply</dt>
								<dd class="mx-6 py-4 mt-1 leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
									{data.api.content.reply}
								</dd>
							</div>
						</div>
					</div>
					<div class="mx-4">
						<div class="">
							<div class="py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0 mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Culture</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-5">
									{data.api.culture}
								</dd>
							</div>
						</div>
					</div>
					<div class="mx-4">
						<div class="">
							<div class="py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-0 border-y mx-4">
								<dt class="mx-6 my-4 font-medium leading-6 shrink w-48">Description</dt>
								<dd class="mx-6 my-4 leading-6 text-gray-500 sm:col-span-5">
									{data.api.description}
								</dd>
							</div>
						</div>
					</div>
				</dl>

				<TabGroup class="gap-4 m-8">
					<Tab bind:group={tabSet} name="HTMLformatted" value={0}>HTML formatted</Tab>
					<Tab bind:group={tabSet} name="HTMLrow" value={1}>HTML row</Tab>
					<Tab bind:group={tabSet} name="text" value={2}>Text</Tab>

					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<div class="m-6">
								{@html data.api.content.htmlTemplate}
							</div>
						{:else if tabSet === 1}
							<div class="m-6 appearance-none">
								<pre style="background-color: initial; color:black">
								{data.api.content.htmlTemplate}
							</pre>
							</div>
						{:else if tabSet === 2}
							<div class="m-6">
								{data.api.content.text}
							</div>
						{/if}
					</svelte:fragment>
				</TabGroup>
			{:else}
				<TabGroup class="gap-4 m-8">
					<Tab bind:group={tabSet} name="content" value={0}>Content</Tab>
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<div class="m-6">
								{@html data.api.content}
							</div>
						{/if}
					</svelte:fragment>
				</TabGroup>
			{/if}
		</div>
	</div>
</AppShell>

<style>
	.reset-style {
		all: revert;
	}
</style>
