export interface section {
  sectionID?: number;
  YearLevel: string;
  sectionName: string;
  sectionTeacher: string;
}

export interface sectionStateInterface {
  AllSection: section[];
  newSection?: section;
}

function state(): sectionStateInterface {
  return {
    AllSection: [],
  };
}

export default state;
