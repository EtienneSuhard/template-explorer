import jsonFile from './templates.json';

type Data = {
	team: string;
	communicationCode: string;
	businessProviderCode: string;
	partnerCode: string;
	productCode: string;
	businessUnitCode: string;
	channelType: string;
	templateId: string;
};

type JsonInputType = {
	team: string;
	communications: {
		code: string;
		configurations: {
			businessProviderCode: string | null;
			partnerCode: string | null;
			productCode: string | null;
			businessUnitCode: string;
			channelType: string;
			templateId: string;
		}[];
	}[];
};
type Communications = JsonInputType['communications'][0];
type Configurations = Communications['configurations'][0];

type JsonDataManipulation = {
	team: string;
	code: string;
	configuration: Configurations[];
};

export type Card = {
	team: string;
	communicationCode: string;
	templatesCount: number;
	businessUnitCode: string;
	channelType: string[];
};

export const templates: JsonInputType[] = jsonFile as any;

export var teams = templates.map((team) => team.team);

export function createCard(myTeam: string): Card[] {
	var teamCommunications = templates.find((team) => team.team == myTeam);
	var communications = teamCommunications!.communications;
	var cards: Card[] = [];
	for (var communication of communications) {
		var card: Card = {
			team: teamCommunications!.team,
			communicationCode: communication.code,
			templatesCount: uniqueItems(
				communication.configurations.flatMap((templates) => templates.templateId)
			).length,
			businessUnitCode: uniqueItems(
				communication.configurations.map((code) => code.businessUnitCode)
			).join(', '),
			channelType: uniqueItems(communication.configurations.map((channel) => channel.channelType))
		};
		cards.push(card);
	}
	return cards;
}

export function getConfigurations(communicationCode: string, myTeam: string): JsonDataManipulation {
	var thisTeam = templates.find((team) => team.team == myTeam);
	var thisCommunication = thisTeam!.communications!.filter(
		(code) => code.code == communicationCode
	);
	var thisConfigurations = thisCommunication.flatMap(
		(configuration) => configuration.configurations
	);

	var JsonDatas: JsonDataManipulation = {
		team: myTeam,
		code: communicationCode,
		configuration: thisConfigurations.flatMap((values) => ({
			...values,
			businessProviderCode: notNull(values.businessProviderCode),
			partnerCode: notNull(values.partnerCode),
			productCode: notNull(values.productCode)
		}))
	};
	return JsonDatas;
}

export function getTemplate(
	communicationCode: string,
	myTeam: string,
	templateId: string
): JsonDataManipulation {
	var configurations = getConfigurations(communicationCode, myTeam);
	var thisConfiguration = configurations.configuration.filter(
		(template) => template.templateId == templateId
	);

	var JsonDatas: JsonDataManipulation = {
		team: myTeam,
		code: communicationCode,
		configuration: thisConfiguration
	};

	return JsonDatas;
}

function notNull(param: string | null): string {
	return param != null ? param : '*';
}

function uniqueItems(param: string[] | undefined): string[] {
	var unique: string[] = [];
	param?.forEach((element) => {
		if (!unique.includes(element)) {
			unique.push(element);
		}
	});
	return unique;
}
