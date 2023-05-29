<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import { Autocomplete } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import Icon from '@iconify/svelte';

	export let data: PageData;

	var codesOptions: AutocompleteOption[] = data.cards.map((card) => ({
		label: `${card.communicationCode}`,
		value: `${card.communicationCode}`
	}));

	function onSelection(event: any): void {
		$searchStore.search = event.detail.label;
	}

	var searchStore = createSearchStore(data.cards);

	var unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});

	var popupSettings: PopupSettings = {
		event: 'focus',
		target: 'popupSettings',
		placement: 'bottom-start'
	};
</script>

<AppShell>
	<div
		class="mx-4 my-4 input-group input-group-divider grid-cols-[auto_1fr_auto] container flex-none w-64 shadow-md"
	>
		<div class="input-group-shim">
			<Icon icon="material-symbols:search" />
		</div>
		<input
			name="autocomplete-search"
			class="input autocomplete"
			type="search"
			placeholder="Search..."
			bind:value={$searchStore.search}
			use:popup={popupSettings}
		/>
	</div>

	<div
		class="card w-full max-w-sm max-h-48 p-4 overflow-y-auto border-2 border-violet"
		data-popup="popupSettings"
	>
		<Autocomplete
			bind:input={$searchStore.search}
			options={codesOptions}
			on:selection={onSelection}
		/>
	</div>

	<br />
	<div class="gap-4 mx-4 flex-wrap flex">
		{#each $searchStore.filtered as code}
			<a
				href="/{code.team}/{code.communicationCode}"
<<<<<<< HEAD
				class="card card-hover mx-2 my-2 flex-initial card w-96 h-64 overflow-hidden variant-initial shadow-lg no-underline justify-between"
=======
				class="card card-hover flex-initial card w-96 h-64 overflow-hidden variant-initial shadow-lg no-underline justify-between"
>>>>>>> f54312ec0e7b1451aa0a4ab617cce3cd53384c95
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
