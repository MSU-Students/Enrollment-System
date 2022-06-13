export interface section {
  sectionID?: number;
  YearLevel: string;
  sectionName: string;
  time1: string;
  time2: string;
  day1: string;
  day2: string;
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
