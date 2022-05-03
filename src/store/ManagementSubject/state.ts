export interface ManagementSubject {
  subjectID?: string;
  AYCode: string;
  YearLevel: string;
  SubjectCode: string;
  DescriptiveTitle: string;
  Prerequisite: string;
  Units: string;
  Day: string;
  Day2: string;
  Time: string;
  Time2: string;
}

export interface ManagementSubjectStateInterface {
  AllSubject: ManagementSubject[];
  newSubject?: ManagementSubject;
}

function state(): ManagementSubjectStateInterface {
  return {
    AllSubject: [],
  };
}

export default state;
