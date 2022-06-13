export interface scheduling {
  scheduleID?: string;
  SubjectCode: string;
  AcademicYear: string;
  yearLevel: string;
  Semester: string;
  Course: string;
  Section: string;
  Teacher: string;
  DescriptiveTitle: string;
  room: string;
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
