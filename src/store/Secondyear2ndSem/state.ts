export interface ISecondYear2ndSemInfo {
  secondYear2ndSemID?: string;
  subject: string;
  description: string;
  units: string;
}

export interface SecondYear2ndSemStateInterface {
  allSecondYear2ndSem: ISecondYear2ndSemInfo[];
}

function state(): SecondYear2ndSemStateInterface {
  return {
    allSecondYear2ndSem: [
      {
        secondYear2ndSemID: '01',
        subject: 'Gec109',
        description: 'Life and Works of Rizal',
        units: '3',
      },
      {
        secondYear2ndSemID: '02',
        subject: 'CCC151',
        description: 'Information Management',
        units: '3',
      },
    ],
  };
}

export default state;
