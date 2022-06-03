export interface enrollmentmodule {
  enrollmentID?: string;
  studentID: string;
  fullname: string;
  academicYear: string;
  semester: string;
  course: string;
  YearLevel: string;
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
