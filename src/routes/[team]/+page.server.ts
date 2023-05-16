import { error } from '@sveltejs/kit';
import { communicationCode } from '../../lib/templates';
import { tableMapperValues } from '@skeletonlabs/skeleton';
import type { TableSource } from '@skeletonlabs/skeleton';

export function load({ params }) {
	const codes = communicationCode(params.team);
	const thisTeam = params.team;

	return {
		codes,
		thisTeam
	};
}
