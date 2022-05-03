import { TeacherDto } from './../../services/restapi/api';
export interface ManagementTeacher {
  teacherID?: string;
  FullName: string;
  Degree: string;
  Specialization: string;
}

export interface ManagementTeacherStateInterface {
  allTeacher: TeacherDto[];
  NewTeacher?: TeacherDto;
}

function state(): ManagementTeacherStateInterface {
  return {
    allTeacher: [],
  };
}

export default state;
