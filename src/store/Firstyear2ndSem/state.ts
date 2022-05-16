export interface IFirstYear2ndSemInfo {
  firstYear2ndSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface FirstYear2ndSemStateInterface {
  allFirstYear2ndSem: IFirstYear2ndSemInfo[];
  allNewFirstYear2ndSem?: IFirstYear2ndSemInfo;
}

function state(): FirstYear2ndSemStateInterface {
  return {
    allFirstYear2ndSem: [],
  };
}

export default state;
