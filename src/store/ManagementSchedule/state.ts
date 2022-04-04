export interface ManagementSchedule {
  scheduleID?: string;
  SubjectCode: string;
  DescriptiveTitle: string;
  Units: string;
  Day: string;
  Day2: string;
  Time: string;
  Time2: string;
  Teacher: string;
  Room: string;
}

export interface ManagementScheduleStateInterface {
  AllSchedule: ManagementSchedule[];
  newSchedule?: ManagementSchedule;
}

function state(): ManagementScheduleStateInterface {
  return {
    AllSchedule: [],
  };
}

export default state;
