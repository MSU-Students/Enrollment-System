import { enrollmentApiService } from './enrolment-api.service';
import { CourseDto, DefaultApi } from './restapi/api';

class CourseService extends DefaultApi {
  async create(payload: any): Promise<CourseDto> {
    const response = await enrollmentApiService.addCourses(payload);
    return response.data;
  }

  async getAll(): Promise<CourseDto> {
    const response = await enrollmentApiService.getCourses();
    return response.data;
  }

  async getOne(courseID: number): Promise<CourseDto> {
    const response = await enrollmentApiService.getCourse(courseID);
    return response.data;
  }

  async update(courseID: number, payload: any) {
    const response = await enrollmentApiService.updatecourses(courseID, payload);
    return response.data;
  }

  async delete(courseID: number) {
    const response = await enrollmentApiService.deleteCourse(courseID);
    return response.data;
  }
}

const courseService = new CourseService();
export default courseService;
