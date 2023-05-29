import { error } from '@sveltejs/kit';
import { getCommunicationCode, createCard } from '../../lib/templatesjson/templates';
import type { Card } from '../../lib/templatesjson/templates';

export function load({ params }) {
	const codes = getCommunicationCode(params.team);
	var cards: Card[] = [];

	for (var code of codes) {
		var codeValue = code.valueOf();
		var card = createCard(params.team, codeValue);
		cards.push(card);
	}
	return {
		cards
	};
}
