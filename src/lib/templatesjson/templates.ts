import jsonFile from './templates.json';

type Data = {
	businessProviderCode: string;
	partnerCode: string;
	productCode: string;
	businessUnitCode: string;
	channelType: string;
	templateId: string;
};

type JsonOutputType = {
	team: string;
	values: {
		communicationCode: string;
		businessProviderCode: string | null;
		partnerCode: string | null;
		productCode: string | null;
		businessUnitCode: string;
		channelType: string;
		templateId: string;
	}[];
};

export type Card = {
	team: string;
	communicationCode: string;
	templatesCount: number;
	businessUnitCode: string;
	channelType: string[];
};

export const templates: JsonOutputType[] = jsonFile as any;

export var teams = templates.map((team) => team.team);

export function getCommunicationCode(currentTeam: string): string[] {
	var allCodes = templates
		.find((thisteam) => thisteam.team == currentTeam)
		?.values.map((code) => code.communicationCode);
	return uniqueItems(allCodes);
}

export function createCard(currentTeam: string, communicationCode: string): Card {
	var myteam = templates.find((thisteam) => thisteam.team == currentTeam);
	var values = myteam?.values.filter((data) => data.communicationCode == communicationCode);

	var templateIdCount: number = uniqueItems(values?.flatMap((value) => value.templateId)).length;
	var businessUnitCode = uniqueItems(values?.flatMap((value) => value.businessUnitCode)).join(', ');
	var channelType = uniqueItems(values?.flatMap((value) => value.channelType));

	var card: Card = {
		team: currentTeam,
		communicationCode: communicationCode,
		templatesCount: templateIdCount,
		businessUnitCode: businessUnitCode,
		channelType: channelType
	};

	return card;
}
export function communicationCodeValues(communicationCode: string, currentTeam: string): Data[] {
	var myteam = templates.find((thisteam) => thisteam.team == currentTeam);
	var values = myteam!.values.filter((data) => data.communicationCode == communicationCode);
	var datas: Data[] = values?.map((data) => ({
		businessProviderCode: notNull(data.businessProviderCode),
		partnerCode: notNull(data.partnerCode),
		productCode: notNull(data.productCode),
		businessUnitCode: notNull(data.businessUnitCode),
		channelType: data.channelType,
		templateId: data.templateId
	}));
	return datas;
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
