import { getTemplate } from '$lib/templatesjson/templates';
import { getApiValue } from '$lib/np6/api';

export function load({ params }) {
	const jsonDatas = getTemplate(params.code, params.team, params.template);
	const channelType = jsonDatas.channelType as 'Email' | 'Sms';
	const api = getApiValue(params.template, channelType);

	return {
		api,
		jsonDatas
	};
}
