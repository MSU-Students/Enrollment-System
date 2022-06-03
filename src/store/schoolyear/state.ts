export interface schoolyear {
  schoolyearid?: number;
  schoolyear: number;
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
