import { faker } from '@faker-js/faker';

interface Np6 {
	type: string;
	id: string;
	name: string;
	description: string;
	creationDate: string;
	informations: {
		folder: number;
		category: number;
		state: number;
	};
	settings: {
		templating: {
			version: number;
			handlers: {
				onLoad: [];
				onRender: string;
			};
		};
		editionMode: number;
		environment: {};
		field: number;
		culture: string;
		contentFormat: number;
		useFormLinkSSL: boolean;
		performance: {
			openingRate: number;
			clickRate: number;
			unsubscribeRate: number;
		};
		mp: {
			use: boolean;
			increment: boolean;
		};
		webAnalyser: null;
	};
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
}

export function createRandomValue(id: string): Np6 {
	return {
		type: faker.lorem.word(),
		id: id,
		name: faker.company.name(),
		description: faker.lorem.text(),
		creationDate: faker.date.past().toDateString(),
		informations: {
			folder: faker.number.int(),
			category: faker.number.int(),
			state: faker.number.int()
		},
		settings: {
			templating: {
				version: faker.number.int(),
				handlers: {
					onLoad: [],
					onRender: ''
				}
			},
			editionMode: faker.number.int(),
			environment: {},
			field: faker.number.int(),
			culture: faker.location.county(),
			contentFormat: faker.number.int(),
			useFormLinkSSL: true,
			performance: {
				openingRate: faker.number.int(),
				clickRate: faker.number.int(),
				unsubscribeRate: faker.number.int()
			},
			mp: {
				use: false,
				increment: false
			},
			webAnalyser: null
		},
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
			html: faker.internet.url(),
			text: faker.lorem.word()
		}
	};
}
