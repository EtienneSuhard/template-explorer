import { createRandomValue } from './faker';

/*
Pour la partie NP6 Action :
Id = $.id
Name = $.name
Status = $.informations.state. Tu as une table de correspondances des Ids avec leur libellé plus haut dans la doc
Description = $.description
Culture = $.settings.culture
From = $.content.headers.from. Il faut reconstruire le libellé avec les 3 variables
Reply = $.content.headers.reply

Ensuite pour l'email :
Subject = $.content.subject
HTML (Formatted) = $.content.html. Le contenu est rendu en html/css
HTML (raw) : $.content.html. Le contenu est en format textee
Text = $.content.text
Inferred variables = on verra plus tard

Pour les SMS on verra plus tard également */

type Template = {
	np6Action: {
		id: string;
		name: string;
		status: null;
		description: string;
		culture: string;
		from: string;
		reply: string;
	};
	emailContent: {
		subject: string;
		htmlFormatted: null;
		htmlRaw: null;
		text: string;
	};
};

export function getApiValue(templateId: string): Template {
	var fakervalues = createRandomValue(templateId);

	var values: Template = {
		np6Action: {
			id: templateId,
			name: fakervalues.name,
			status: null,
			description: fakervalues.description,
			culture: fakervalues.settings.culture,
			from:
				fakervalues.content.headers.from.prefix +
				fakervalues.content.headers.from.domain +
				fakervalues.content.headers.from.label,
			reply:
				fakervalues.content.headers.reply.prefix +
				fakervalues.content.headers.from.domain +
				fakervalues.content.headers.from.label
		},
		emailContent: {
			subject: fakervalues.content.subject,
			htmlFormatted: null,
			htmlRaw: null,
			text: fakervalues.content.text
		}
	};

	return values;
}
