export interface IFourYear1stSemInfo {
  fourYear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
}

export interface FourYear1stSemStateInterface {
  allFourYear1stSem: IFourYear1stSemInfo[];
  activeAccount?: IFourYear1stSemInfo;
}

function state(): FourYear1stSemStateInterface {
  return {
    allFourYear1stSem: [
      {
        fourYear1stSemID: '01',
        subject: 'ENT101',
        description: 'Start Up Essentials',
        units: '3',
      },
      {
        fourYear1stSemID: '02',
        subject: 'ITE185',
        description: 'Information Assurance And Security',
        units: '3',
      },
    ],
  };
}

export default state;
