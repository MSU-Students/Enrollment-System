import { SubjectDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class SubjectService extends DefaultApi {
  async create(payload: any): Promise<SubjectDto> {
    const response = await enrollmentApiService.addSubject(payload);
    return response.data;
  }

  async getAll(): Promise<SubjectDto> {
    const response = await enrollmentApiService.getAllSubjects();
    return response.data;
  }

  async getOne(subjectID: number): Promise<SubjectDto> {
    const response = await enrollmentApiService.getSubject(subjectID);
    return response.data;
  }

  async update(subjectID: number, payload: any) {
    const response = await enrollmentApiService.updateSubject(
      subjectID,
      payload,
    );
    return response.data;
  }

  async delete(subjectID: number) {
    const response = await enrollmentApiService.deleteOneSubject(subjectID);
    return response.data;
  }
}

const subjectService = new SubjectService();
export default subjectService;
