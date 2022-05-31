export interface schoolyear {
  schoolyearid?: number;
  schoolyear: string;
}

export interface schoolyearStateInterface {
  allSchoolYear: schoolyear[];
  newSchoolYear?: schoolyear;
}

function state(): schoolyearStateInterface {
  return {
    allSchoolYear: [],
  };
}

export default state;
