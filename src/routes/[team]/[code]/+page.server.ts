import { error } from '@sveltejs/kit';
import { communicationCodeValues } from '../../../lib/templates';
//import { tableMapperValues } from '@skeletonlabs/skeleton';
//import type { TableSource } from '@skeletonlabs/skeleton';

export function load({ params }) {
	const values = communicationCodeValues(params.code, params.team);
	/*
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: [
			'businessProviderCode',
			'partnerCode',
			'productCode',
			'businessUnitCode',
			'communicationType',
			'templateId'
		],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(values, [
			'businessProviderCode',
			'partnerCode',
			'productCode',
			'businessUnitCode',
			'communicationType',
			'templateId'
		])
	};
*/
	return {
		values
	};
}
