export interface course {
  courseID?: number;
  courseCode: string;
  courseDescription: string;
}

export interface courseStateInterface {
  AllCourse: course[];
  newCourse?: course;
}

function state(): courseStateInterface {
  return {
    AllCourse: [],
  };
}

export default state;
