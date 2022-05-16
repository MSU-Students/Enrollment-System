export interface ISecondYear1stSemInfo {
  secondYear1stSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface SecondYear1stSemStateInterface {
  allSecondYear1stSem: ISecondYear1stSemInfo[];
  allNewSecondYear1stSem?: ISecondYear1stSemInfo;
}

function state(): SecondYear1stSemStateInterface {
  return {
    allSecondYear1stSem: [],
  };
}

export default state;
