import { derived, writable, type Writable } from 'svelte/store';

export const createSearchStore = <T>(searchPattern: Writable<string>, data: T[]) => {
	return derived(searchPattern, ($searchPattern) => {
		var communicationCode = $searchPattern.toLowerCase() || '';
		return data.filter((item: any) => {
			return item.communicationCode.toLowerCase().includes(communicationCode);
		});
	});
};
