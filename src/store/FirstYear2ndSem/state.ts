export interface IFirstYear2ndSemInfo {
    firstYear2ndSemID?: string;
    subjectSecond: string;
    descriptionSecond: string;
    unitsSecond: string;
  }
  
  export interface FirstYear2ndSemStateInterface {
    allFirstYear2ndSem: IFirstYear2ndSemInfo[];
    activeAccount?: IFirstYear2ndSemInfo;
  }
  
  function state(): FirstYear2ndSemStateInterface {
    return {
      allFirstYear2ndSem: [
        {
          firstYear2ndSemID: '01',
          subjectSecond: 'Gec103',
          descriptionSecond: 'Contemporary World',
          unitsSecond: '3',
        },
        {
          firstYear2ndSemID: '02',
          subjectSecond: 'CCC102',
          descriptionSecond: 'Computer Programing 2',
          unitsSecond: '3',
        },
        
      ],
    };
  }
  
  export default state;
  