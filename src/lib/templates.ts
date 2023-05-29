import jsonFile from './templates.json';

type Data = {
	businessProviderCode: string;
	partnerCode: string;
	productCode: string;
	businessUnitCode: string;
	channelType: string;
	templateId: string;
};

export type Card = {
	team: string;
	communicationCode: string;
	templatesCount: number;
	businessUnitCode: string;
	channelType: string[];
};

export var teams: string[] = myTeams();

function myTeams(): string[] {
	var listTeam: string[] = [];
	for (const jsonDatas of jsonFile) {
		listTeam.push(jsonDatas.team);
	}
	return listTeam;
}

export function getCommunicationCode(currentTeam: string): string[] {
	var allCodes: string[] = [];
	for (var jsonDatas of jsonFile) {
		if (jsonDatas.team == currentTeam) {
			for (var value of jsonDatas.values) {
				allCodes.push(value.communicationCode);
			}
		}
	}
	return uniqueItems(allCodes);
}

export function createCard(currentTeam: string, communicationCode: string): Card {
	var templates: string[] = [];
	var businessUnitCode: string[] = [];
	var channelType: string[] = [];

	for (var jsonDatas of jsonFile) {
		if (jsonDatas.team == currentTeam) {
			for (var code of jsonDatas.values) {
				if (code.communicationCode == communicationCode) {
					templates.push(code.templateId);
					channelType.push(code.channelType);
					businessUnitCode.push(code.businessUnitCode);
				}
			}
		}
	}
	var uniqueBusinessCode = uniqueItems(businessUnitCode);

	var card: Card = {
		team: currentTeam,
		communicationCode: communicationCode,
		templatesCount: uniqueItems(templates).length,
		businessUnitCode: uniqueBusinessCode.join(', '),
		channelType: uniqueItems(channelType)
	};

	return card;
}

export function communicationCodeValues(communicationCode: string, currentTeam: string): Data[] {
	var datas: Data[] = [];
	for (var jsonDatas of jsonFile) {
		if (jsonDatas.team == currentTeam) {
			for (var value of jsonDatas.values) {
				if (value.communicationCode == communicationCode) {
					const data: Data = {
						businessProviderCode: notNull(value.businessProviderCode),
						partnerCode: notNull(value.partnerCode),
						productCode: notNull(value.productCode),
						businessUnitCode: notNull(value.businessUnitCode),
						channelType: value.channelType,
						templateId: value.templateId
					};
					datas.push(data);
				}
			}
		}
	}
	return datas;
}

function notNull(param: string | null): string {
	return param != null ? param : '*';
}

function uniqueItems(param: string[]): string[] {
	var unique: string[] = [];
	param.forEach((element) => {
		if (!unique.includes(element)) {
			unique.push(element);
		}
	});
	return unique;
}
