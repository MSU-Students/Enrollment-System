import { TeacherDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class TeacherService extends DefaultApi {
  async create(payload: any): Promise<TeacherDto> {
    const response = await enrollmentApiService.addTeachers(payload);
    return response.data;
  }

  async getAll(): Promise<TeacherDto> {
    const response = await enrollmentApiService.getTeachers();
    return response.data;
  }

  async getOne(teacherID: number): Promise<TeacherDto> {
    const response = await enrollmentApiService.getTeacher(teacherID);
    return response.data;
  }

  async update(teacherID: number, payload: any) {
    const response = await enrollmentApiService.updateTeachers(
      teacherID,
      payload,
    );
    return response.data;
  }

  async delete(teacherID: number) {
    const response = await enrollmentApiService.deleteTeacher(teacherID);
    return response.data;
  }
}

const teacherService = new TeacherService();
export default teacherService;
