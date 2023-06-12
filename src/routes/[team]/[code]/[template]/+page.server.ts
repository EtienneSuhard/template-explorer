import { getTemplate } from '$lib/templatesjson/templates';
import { getApiValue } from '$lib/np6/api';

export function load({ params }) {
	const api = getApiValue(params.template);
	const jsonDatas = getTemplate(params.code, params.team, params.template);

	return {
		api,
		jsonDatas
	};
}
