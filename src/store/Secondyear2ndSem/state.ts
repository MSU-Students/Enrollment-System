export interface ISecondYear2ndSemInfo {
  secondYear2ndSemID?: string;
  subject: string;
  description: string;
  units: string;
  teacher: string;
  room: string;
  schedule: string;
}

export interface SecondYear2ndSemStateInterface {
  allSecondYear2ndSem: ISecondYear2ndSemInfo[];
  activeAccount?: ISecondYear2ndSemInfo;
}

function state(): SecondYear2ndSemStateInterface {
  return {
    allSecondYear2ndSem: [],
  };
}

export default state;
