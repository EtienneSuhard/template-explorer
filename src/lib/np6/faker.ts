import { faker } from '@faker-js/faker';
import { serialize } from 'v8';
import { promises as fs } from 'fs';
import { readonly } from 'svelte/store';
import { type } from 'os';

const microsoftEvent = await fs.readFile('src/lib/np6/Microsoft Event.html');
const accountVerify = await fs.readFile('src/lib/np6/Account Verify.html');
const microsoftEventTemplate: string = microsoftEvent.toString();
const accountVerifyTemplate: string = accountVerify.toString();

function randomTemplate(): string {
	const rand = Math.floor(Math.random() * 2);
	const templates = [microsoftEventTemplate, accountVerifyTemplate];
	return templates[rand];
}

type Status =
	| 10
	| 20
	| 30
	| 35
	| 36
	| 38
	| 40
	| 50
	| 55
	| 60
	| 65
	| 70
	| 72
	| 73
	| 75
	| 80
	| 90
	| 100
	| 110
	| 45;

type Np6Email = {
	type: 'Email';
	content: {
		headers: {
			from: {
				prefix: string;
				domain: string;
				label: string;
			};
			reply: {
				prefix: string;
				domain: string;
				label: string;
			};
		};
		subject: string;
		html: string;
		text: string;
	};
};
type Np6Sms = {
	type: 'Sms';
	content: {
		textContent: string;
	};
};
type Np6Action = (Np6Sms | Np6Email) & {
	name: string;
	description: string;
	creationDate: string;
	informations: {
		state: Status;
	};
	settings: {
		culture: string;
	};
};

export function Np6Faker(type: Np6Action['type']): Np6Action {
	const baseAction = {
		// type: type,

		name: faker.company.name(),
		description: faker.lorem.text(),
		creationDate: faker.date.past().toDateString(),
		informations: {
			state: faker.helpers.arrayElement<Status>([
				10, 20, 30, 35, 36, 38, 40, 50, 55, 60, 65, 70, 72, 73, 75, 80, 90, 100, 110, 45
			])
		},
		settings: {
			culture: faker.location.county()
		}
		// content: getContent(type)
	} satisfies Partial<Np6Action>;

	if (type === 'Email') {
		return {
			...baseAction,
			type: 'Email',
			content: {
				headers: {
					from: {
						prefix: faker.internet.domainWord(),
						domain: faker.internet.domainName(),
						label: faker.internet.domainSuffix()
					},
					reply: {
						prefix: faker.internet.domainWord(),
						domain: faker.internet.domainName(),
						label: faker.internet.domainSuffix()
					}
				},
				subject: faker.lorem.word(),
				html: randomTemplate(),
				text: faker.lorem.text()
			}
		};
	} else {
		return {
			...baseAction,
			type: 'Sms',
			content: {
				textContent: faker.lorem.paragraph()
			}
		};
	}
}
