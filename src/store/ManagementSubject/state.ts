export interface ManagementSubject {
  subjectID?: string;
  AYCode: string;
  YearLevel: string;
  SubjectCode: string;
  DescriptiveTitle: string;
  Prerequisite: string;
  Units: string;
  
}

export interface ManagementSubjectStateInterface {
  manageSubject: ManagementSubject[];
  
}

function state(): ManagementSubjectStateInterface {
  return {
    manageSubject: [
      {
        subjectID: '01',
        AYCode: '2021-2022 1st Semester',
        YearLevel: 'First Year',
        SubjectCode: 'GEC 101',
        DescriptiveTitle: 'PROGRAMMING 1',
        Prerequisite: 'None',
        Units: '3',
        
      },
    ],
  };
}

export default state;
