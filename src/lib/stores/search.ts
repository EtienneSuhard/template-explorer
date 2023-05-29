import { writable } from 'svelte/store';

export const createSearchStore = (data: any) => {
	var { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store: any) => {
	var communicationCode = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item: any) => {
		return item.communicationCode.toLowerCase().includes(communicationCode);
	});
};
