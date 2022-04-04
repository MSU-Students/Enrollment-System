export interface ManagementTeacher {
  teacherID?: string;
  FullName: string;
  Degree: string;
  Specialization: string;
}

export interface ManagementTeacherStateInterface {
  allTeacher: ManagementTeacher[];
  NewTeacher?: ManagementTeacher;
}

function state(): ManagementTeacherStateInterface {
  return {
    allTeacher: [],
  };
}

export default state;
