export interface IFourthYear1stSemInfo {
  fourYear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface FourthYear1stSemStateInterface {
  allFourthYear1stSem: IFourthYear1stSemInfo[];
  newFourthYear1stSem?: IFourthYear1stSemInfo;
}

function state(): FourthYear1stSemStateInterface {
  return {
    allFourthYear1stSem: [],
  };
}

export default state;
