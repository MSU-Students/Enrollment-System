export interface ManagementSubject {
  subjectID?: string;
  SubjectCode: string;
  DescriptiveTitle: string;
  Units: string;
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
