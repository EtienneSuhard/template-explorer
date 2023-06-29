import { promises as fs } from 'fs';
import Path from 'path';

type JsonOutputType = {
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

type Communications = JsonOutputType['communications'][0];
type Configurations = Communications['configurations'][0];

type JsonInputType = {
	CommunicationBusinessRules: {
		BusinessDimensionValues: {
			BusinessProviderCode: string | undefined;
			PartnerCode: string | undefined;
			ProductCode: string | undefined;
			BusinessUnitCode: string;
		};
		Actions: {
			Channel: string;
			TemplateId: string;
		}[];
	}[];
};

const directory = './src/Jsonfiles/templates';
var jsonOutPut: JsonOutputType[] = [];
const teams = await fs.readdir(directory);

for (const team of teams) {
	var filePR = Path.join(directory, team, 'PR');
	var filesTeam = await fs.readdir(filePR); //Regarder le contenu du dossier PR de la team actuelle

	const info: JsonOutputType = {
		team: team,
		communications: await getCommunications(filesTeam)
	};

	async function getCommunications(files: string[]): Promise<Communications[]> {
		var communications: Communications[] = [];
		for (var file of files) {
			const read = await fs.readFile(Path.join(filePR, file));
			const jsonInput: JsonInputType = JSON.parse(read.toString());

			var communication: Communications = {
				code: Path.parse(file).name,
				configurations: getConfigurations(jsonInput)
			};
			communications.push(communication);
		}

		return Promise.resolve(communications);
	}

	function getConfigurations(jsonInput: JsonInputType): Configurations[] {
		var configurations: Configurations[] = [];

		for (const objCombusiness of jsonInput.CommunicationBusinessRules) {
			for (const objActions of objCombusiness.Actions) {
				var configuration: Configurations = {
					businessProviderCode: mapCode(
						objCombusiness.BusinessDimensionValues.BusinessProviderCode
					),
					partnerCode: mapCode(objCombusiness.BusinessDimensionValues.PartnerCode),
					productCode: mapCode(objCombusiness.BusinessDimensionValues.ProductCode),
					businessUnitCode: objCombusiness.BusinessDimensionValues.BusinessUnitCode,
					channelType: objActions.Channel,
					templateId: objActions.TemplateId
				};
				configurations.push(configuration);
			}
		}
		return configurations;
	}

	jsonOutPut.push(info);
}
fs.writeFile('./src/templatesjson/templates.json', JSON.stringify(jsonOutPut, undefined, 2));

function mapCode(value: string | undefined): string | null {
	if (value == '*' || value == undefined) {
		return null;
	} else {
		return value;
	}
}
