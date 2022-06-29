import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, StudentRecordDto } from './restapi/api';

class StudentRecordService extends DefaultApi {
  async create(payload: any): Promise<StudentRecordDto> {
    const response = await enrollmentApiService.addStudentRecord(payload);
    return response.data;
  }

  async getAll(): Promise<StudentRecordDto> {
    const response = await enrollmentApiService.getStudentRecords();
    return response.data;
  }

  async getOne(StudentRecordID: number): Promise<StudentRecordDto> {
    const response = await enrollmentApiService.getStudentRecord(
      StudentRecordID,
    );
    return response.data;
  }

  async update(StudentRecordID: number, payload: any) {
    const response = await enrollmentApiService.updateStudentRecord(
      StudentRecordID,
      payload,
    );
    return response.data;
  }

  async delete(StudentRecordID: number) {
    const response = await enrollmentApiService.deleteStudentRecord(
      StudentRecordID,
    );
    return response.data;
  }
}

const studentrecordService = new StudentRecordService();
export default studentrecordService;
