export interface scheduling {
  scheduleID?: string;
  SubjectCode: string;
  AcademicYear: string;
  yearLevel: string;
  Semester: string;
  Course: string;
  Section: string;
  Teachers: string;
  DescriptiveTitle: string;
  Day: string;
  Day2: string;
  Time: string;
  Time2: string;
  Teacher: string;
}

export interface SchedulingStateInterface {
  AllSchedule: scheduling[];
  newSchedule?: scheduling;
}

function state(): SchedulingStateInterface {
  return {
    AllSchedule: [],
  };
}

export default state;
