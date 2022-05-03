export interface IThirdYear2ndSemInfo {
  thirdYear2ndSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface ThirdYear2ndSemStateInterface {
  allThirdYear2ndSem: IThirdYear2ndSemInfo[];
  activeAccount?: IThirdYear2ndSemInfo;
}

function state(): ThirdYear2ndSemStateInterface {
  return {
    allThirdYear2ndSem: [],
  };
}

export default state;
