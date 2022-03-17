export interface IStudentInfo {
  admissionID?: string;
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
  activeStudent?: IStudentInfo;
}

function state(): AdmissionStateInterface {
  return {
    allStudentInfo: [
      {
        admissionID: '01',
        reportCard: false,
        bCertificate: false,
        Pic: false,
        eForm: false,
        IdNum: '202110757',
        lrn: '123456789',
        ayCode: 'First Semester',
        incomingYlevel: 'First Year',
        studentType: 'New Student',
        FName: 'Naeem',
        MName: 'Mamangcao',
        LName: 'Mangcol',
        age: '21',
        dataOfBirth: '0000/00/00',
        placeOfBirth: 'Pasay Manila City',
        contactNo: '09639539072',
        gender: 'Male',
        martialStatus: 'Single',
        citizenship: 'Pilipino',
        religion: 'Islam',
        address: 'Msu Marawi',
      },
    ],
  };
}

export default state;
