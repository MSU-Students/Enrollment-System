export interface ManagementTeacher {
  teacherID?: string;
  TeacherID: string;
  FullName: string;
  Degree: string;
  Specialization: string;
  
}

export interface ManagementTeacherStateInterface {
  manageTeacher: ManagementTeacher[];
  activeTeacher?: ManagementTeacher;
}
  


function state(): ManagementTeacherStateInterface {
  return {
    manageTeacher: [
      {
        teacherID: '01',
        TeacherID: '201831678',
        FullName: 'Muammar A. Alib',
        Degree: 'BACHELOR',
        Specialization: 'PROGRAMMING',
        
        
      },
    ],
  };
}

export default state;
