export interface IThirdYear2ndSemInfo {
  thirdYear2ndSemID?: string;
  subject: string;
  description: string;
  units: string;
}

export interface ThirdYear2ndSemStateInterface {
  allThirdYear2ndSem: IThirdYear2ndSemInfo[];
  activeAccount?: IThirdYear2ndSemInfo;
}

function state(): ThirdYear2ndSemStateInterface {
  return {
    allThirdYear2ndSem: [
      {
        thirdYear2ndSemID: '01',
        subject: 'Fil102',
        description: 'Ekokritisismo at Pagpapahala sa kalikasan',
        units: '3',
      },
      {
        thirdYear2ndSemID: '01',
        subject: 'ITE192',
        description: 'Capstone',
        units: '3',
      },
    ],
  };
}

export default state;
