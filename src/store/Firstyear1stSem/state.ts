export interface IFirstYearInfo {
  firstyear1stSemID?: number;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface FirstYearStateInterface {
  allFirstYear: IFirstYearInfo[];
  newFirstYear?: IFirstYearInfo;
}

function state(): FirstYearStateInterface {
  return {
    allFirstYear: [],
  };
}

export default state;
