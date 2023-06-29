import { getConfigurations } from '$lib/templatesjson/templates';

export function load({ params }) {
	var jsonDatas = getConfigurations(params.code, params.team);

	return {
		jsonDatas
	};
}

/*
	
*/
