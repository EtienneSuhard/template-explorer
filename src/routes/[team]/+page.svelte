<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { createSearchStore } from '$lib/stores/search';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import Icon from '@iconify/svelte';
	import { writable, type Readable, type Writable } from 'svelte/store';
	import type { Card } from '$lib/templatesjson/templates';

	export let data: PageData;

	const searchValue = writable('');
	let searchStore: Readable<Card[]>;
	$: {
		searchValue.set('');
		searchStore = createSearchStore(searchValue, data.cards);
	}

	$: codesOptions = data.cards.map((card) => ({
		label: `${card.communicationCode}`,
		value: `${card.communicationCode}`
	})) as AutocompleteOption[];

	// var unsubscribe = searchValue.subscribe((value) => searchStore.filter(value));

	// onDestroy(() => {
	// 	unsubscribe();
	// });

	var popupSettings: PopupSettings = {
		event: 'focus',
		target: 'popupSettings',
		placement: 'bottom-start'
	};
</script>

<AppShell>
	<div
		class="mx-6 my-8 input-group input-group-divider grid-cols-[auto_1fr_auto] container flex-none w-96 shadow-md"
	>
		<div class="input-group-shim">
			<Icon icon="material-symbols:search" />
		</div>
		<input
			name="autocomplete-search"
			class="input autocomplete"
			type="search"
			placeholder="Search..."
			bind:value={$searchValue}
			use:popup={popupSettings}
		/>
	</div>

	<div
		class="card w-96 max-h-48 p-4 overflow-y-auto border-2 border-violet"
		data-popup="popupSettings"
	>
		<Autocomplete
			bind:input={$searchValue}
			options={codesOptions}
			on:selection={(event) => ($searchValue = event.detail.label)}
		/>
	</div>

	<br />
	<div class="gap-4 mx-4 flex-wrap flex">
		{#each $searchStore as code}
			<a
				href="/{code.team}/{code.communicationCode}"
				class="card card-hover mx-2 my-2 flex-initial card w-96 h-64 overflow-hidden variant-initial shadow-lg no-underline justify-between"
			>
				<div class="card header p-4 h-48 space-y-4 break-words">
					<h3>{code.communicationCode}</h3>

					<article>
						{#each code.businessUnitCode as businessUnitCode}
							{businessUnitCode}
						{/each}
					</article>
				</div>
				<hr />
				<footer class="card footer p-4 flex items-center space-x-4">
					<div class="flex-auto flex">
						<h6>
							<span class="chip variant-ghost rounded-full w-8 h-8 shadow-md"
								>{code.templatesCount}</span
							>
							Templates
						</h6>
					</div>
					<div class="flex items-stretch gap-1">
						{#each code.channelType as channelType}
							{#if channelType.toLowerCase() == 'sms'}
								<Icon icon="material-symbols:sms-outline" />
							{/if}
							{#if channelType.toLowerCase() == 'email'}
								<Icon icon="entypo:email" />
							{/if}
							{#if channelType.toLowerCase() == 'letter'}
								<Icon icon="lucide:mail" />
							{/if}
						{/each}
					</div>
				</footer>
			</a>
		{/each}
	</div>
</AppShell>
