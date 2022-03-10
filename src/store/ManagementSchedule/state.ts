export interface ManagementSchedule {
  scheduleID?: string;
  SubjectCode: string;
  DescriptiveTitle: string;
  Units: string;
  Day: string;
  Day2:string;
  Time:string;
  Time2:string;
  Teacher: string;
  Room: string;
  
}

export interface ManagementScheduleStateInterface {
  manageSchedule: ManagementSchedule[];
  
}

function state(): ManagementScheduleStateInterface {
  return {
    manageSchedule: [
      {
        scheduleID: '01',
        SubjectCode: 'GEC 101',
        DescriptiveTitle: 'PROGRAMMING 1',
        Units: '3',
        Day: 'Monday',
        Day2:'Tuesday',
        Time:'10:30am',
        Time2:'11:30am',
        Teacher: 'Joseph C. Seiras',
        Room:'3',
        
      },
    ],
  };
}

export default state;
