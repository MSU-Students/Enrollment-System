export interface IFirstYearInfo {
  firstyear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
}

export interface FirstYearStateInterface {
  allFirsYear: IFirstYearInfo[];
  activeAccount?: IFirstYearInfo;
}

function state(): FirstYearStateInterface {
  return {
    allFirsYear: [
      {
        firstyear1stSemID: '01',
        subject: 'Gec101',
        description: 'Understanding the Self',
        units: '3',
      },
      {
        firstyear1stSemID: '02',
        subject: 'CCC101',
        description: 'Computer Programming 1',
        units: '3',
      },
    ],
  };
}

export default state;
