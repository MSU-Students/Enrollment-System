export interface ISecondYear1stSemInfo {
    secondYear1stSemID?: string;
    subject: string;
    description: string;
    units: string;
  }
  
  export interface SecondYear1stSemStateInterface {
    allSecondYear1stSem: ISecondYear1stSemInfo[];
    activeAccount?: ISecondYear1stSemInfo;
  }
  
  function state(): SecondYear1stSemStateInterface {
    return {
    allSecondYear1stSem: [
        {
          secondYear1stSemID: '01',
          subject: 'Gec108',
          description: 'Science, Technology and Society',
          units: '3',
        },
        {
          secondYear1stSemID: '02',
          subject: 'CCC121',
          description: 'Data Structure and Algorithms',
          units: '3',
        },
      ],
    };
  }
  
  export default state;
  