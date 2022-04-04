export interface IStudentInfo {
  admissionID?: number;
  reportCard: boolean;
  bCertificate: boolean;
  Pic: boolean;
  eForm: boolean;
  IdNum: string;
  lrn: string;
  ayCode: string;
  incomingYlevel: string;
  studentType: string;
  FName: string;
  MName: string;
  LName: string;
  age: string;
  dataOfBirth: string;
  placeOfBirth: string;
  contactNo: string;
  gender: string;
  martialStatus: string;
  citizenship: string;
  religion: string;
  address: string;
}

export interface AdmissionStateInterface {
  allStudentInfo: IStudentInfo[];
  NewStudent?: IStudentInfo;
}

function state(): AdmissionStateInterface {
  return {
    allStudentInfo: [],
  };
}

export default state;
