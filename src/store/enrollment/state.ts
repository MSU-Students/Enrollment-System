export interface enrollmentmodule {
  enrollmentID?: string;
  enteredsubjectCode: string;
  enteredsection: string;
  entereddescriptiveTitle: string;
  enteredtime: string;
  entereddate: string;
  enteredunits: string;
  enteredteacher: string;
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
