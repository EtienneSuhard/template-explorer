import { error } from '@sveltejs/kit';
import { createCard } from '$lib/templatesjson/templates';
import type { Card } from '$lib/templatesjson/templates';

export function load({ params }) {
	var cards: Card[] = createCard(params.team);
	return {
		cards
	};
}
