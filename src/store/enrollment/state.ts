export interface enrollmentmodule {
  enrollmentID?: string;
  subjectCode: string;
  studentFullName: string;
  academicYear: string;
  yearLevel: string;
  semester: string;
  course: string;
  section: string;
  teacher: string;
  descriptiveTitle: string;
  units: string;
  day: string;
  day2: string;
  time: string;
  time2: string;
}

export interface EnrollmentStateInterface {
  AllEnrollment: enrollmentmodule[];
  newEnrollment?: enrollmentmodule;
}

function state(): EnrollmentStateInterface {
  return {
    AllEnrollment: [],
  };
}

export default state;
