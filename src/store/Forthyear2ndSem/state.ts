export interface IFourthYear2ndSemInfo {
  fourYear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface FourthYear2ndSemStateInterface {
  allFourthYear2ndSem: IFourthYear2ndSemInfo[];
  activeAccount?: IFourthYear2ndSemInfo;
}

function state(): FourthYear2ndSemStateInterface {
  return {
    allFourthYear2ndSem: [],
  };
}

export default state;
