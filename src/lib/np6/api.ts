import { deserialize } from 'v8';
import { Np6Faker } from './faker';
import { faker } from '@faker-js/faker';

type EmailTemplate = {
	type: 'Email';
	description?: string | null;
	culture?: string | null;
	content: {
		from: string;
		reply: string;
		subject: string;
		htmlTemplate: string;
		text: string;
	};
};
type SmsTemplate = {
	type: 'Sms';
	content: string;
};

type TemplateAction = (EmailTemplate | SmsTemplate) & {
	id: string;
	name: string;
	status: string;
};

export function getApiValue(templateId: string, type: TemplateAction['type']): TemplateAction {
	const fakervalues = Np6Faker(type);
	const baseAction = {
		id: templateId,
		name: fakervalues.name,
		status: findStatusObj(fakervalues.informations.state)
	} satisfies Partial<TemplateAction>;

	if (fakervalues.type === 'Email') {
		return {
			...baseAction,
			type: 'Email',
			description: fakervalues.description,
			culture: fakervalues.settings.culture,
			content: {
				from:
					fakervalues.content.headers.from.prefix +
					fakervalues.content.headers.from.domain +
					fakervalues.content.headers.from.label,
				reply:
					fakervalues.content.headers.reply.prefix +
					fakervalues.content.headers.from.domain +
					fakervalues.content.headers.from.label,
				subject: fakervalues.content.subject,
				htmlTemplate: fakervalues.content.html,
				text: fakervalues.content.text
			}
		};
	} else {
		return {
			...baseAction,
			type: 'Sms',
			content: fakervalues.content.textContent
		};
	}
}

function findStatusObj(thisStatus: number): string {
	var status: Record<number, string> = {
		10: 'Création',
		20: 'Crée',
		30: 'Test requis',
		35: 'Test en cours',
		36: 'Test en erreur',
		38: 'Demande de validation',
		40: 'Attente de validation',
		50: 'Validé',
		55: 'Génération',
		60: 'Refusé',
		65: 'Lancement en attente',
		70: 'En cours',
		72: 'En pause',
		73: 'Arrêté',
		75: 'Erreur',
		80: 'Terminé',
		90: 'Supprimé',
		100: 'Gelé',
		110: 'Archivé'
	};

	if (!status.hasOwnProperty(thisStatus)) {
		return 'Inconnu: XX';
	}
	return `${thisStatus}: ${status[thisStatus]}`;
}
