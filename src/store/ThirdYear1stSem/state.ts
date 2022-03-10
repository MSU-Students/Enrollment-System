export interface IThirdYear1stSemInfo {
    thirdYear1stSemID?: string;
    subject: string;
    description: string;
    units: string;
  }
  
  export interface ThirdYear1stSemStateInterface {
    allThirdYear1stSem: IThirdYear1stSemInfo[];
    activeAccount?: IThirdYear1stSemInfo;
  }
  
  function state(): ThirdYear1stSemStateInterface {
    return {
     allThirdYear1stSem: [
        {
          thirdYear1stSemID: '01',
          subject: 'Fil101',
          description: 'Wika at kultura sa Mapayapang Lipunan',
          units: '3',
        },
        {
          thirdYear1stSemID: '02s',
            subject: 'CCC181',
            description: 'Application Development and Emerging Technologies',
            units: '3',
          },
      ],
    };
  }
  
  export default state;
  