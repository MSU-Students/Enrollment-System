export interface studentRecord {
  studentRecordID?: string;
  studentID: string;
  fullname: string;
  course: string;
}

export interface studentRecordStateInterface {
  AllstudentRecord: studentRecord[];
  newstudentRecord?: studentRecord;
}

function state(): studentRecordStateInterface {
  return {
    AllstudentRecord: [],
  };
}

export default state;
