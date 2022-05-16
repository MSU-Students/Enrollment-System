export interface IThirdYear1stSemInfo {
  thirdYear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface ThirdYear1stSemStateInterface {
  allThirdYear1stSem: IThirdYear1stSemInfo[];
  newThirdYear1stsem?: IThirdYear1stSemInfo;
}

function state(): ThirdYear1stSemStateInterface {
  return {
    allThirdYear1stSem: [],
  };
}

export default state;
