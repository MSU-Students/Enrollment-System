export interface IFourYear2ndSemInfo {
    fourYear2ndSemID?: string;
    subject: string;
    description: string;
    units: string;
  }
  
  export interface FourYear2ndSemStateInterface {
    allFourYear2ndSem: IFourYear2ndSemInfo[];
    activeAccount?: IFourYear2ndSemInfo;
  }
  
  function state(): FourYear2ndSemStateInterface {
    return {
        allFourYear2ndSem: [
        {
          fourYear2ndSemID: '01',
          subject: 'ITE197',
          description: 'On the Job Training',
          units: '6',
        },
      ],
    };
  }
  
  export default state;
  