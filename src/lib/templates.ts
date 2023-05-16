import { element } from 'svelte/internal';
import jsonFile from './templates.json';

import { type } from 'os';
//import { team } from '../routes/[team]/+page.server';

type JsonOutputType = {
	team: string;
	values: {
		communicationCode: string;
		businessProviderCode: string | null;
		partnerCode: string | null;
		productCode: string | null;
		businessUnitCode: string | null;
		communicationType: string;
		templateId: string;
	}[];
};

type Data = {
	businessProviderCode: string;
	partnerCode: string;
	productCode: string;
	businessUnitCode: string;
	communicationType: string;
	templateId: string;
};

export const templates: JsonOutputType[] = jsonFile as any;
export const teams: string[] = myTeams();

function myTeams(): string[] {
	const listTeam: string[] = [];
	for (const jsonDatas of jsonFile) {
		listTeam.push(jsonDatas.team);
	}
	return listTeam;
}

export function communicationCode(currentTeam: string): string[] {
	const communicationCode: string[] = [];
	for (const jsonDatas of jsonFile) {
		if (jsonDatas.team == currentTeam) {
			for (const value of jsonDatas.values) {
				communicationCode.push(value.communicationCode);
			}
		}
	}
	//parcours communicationCode[], ne récupère pas les doublons
	let eachCommunicationCode: string[] = [];
	communicationCode.forEach((element) => {
		if (!eachCommunicationCode.includes(element)) {
			eachCommunicationCode.push(element);
		}
	});
	return eachCommunicationCode;
}

export function communicationCodeValues(communicationCode: string, currentTeam: string): Data[] {
	const datas: Data[] = [];
	for (const jsonDatas of jsonFile) {
		if (jsonDatas.team == currentTeam) {
			for (const value of jsonDatas.values) {
				if (value.communicationCode == communicationCode) {
					const data: Data = {
						businessProviderCode: isNotNull(value.businessProviderCode),
						partnerCode: isNotNull(value.partnerCode),
						productCode: isNotNull(value.productCode),
						businessUnitCode: isNotNull(value.businessUnitCode),
						communicationType: value.communicationType,
						templateId: value.templateId
					};
					datas.push(data);
				}
			}
		}
	}
	return datas;
}

function isNotNull(verification: string | null): string {
	if (verification != null) {
		return verification;
	} else {
		return '*';
	}
}
