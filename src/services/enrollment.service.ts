import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, EnrollmentDto } from './restapi/api';

class EnrollmentService extends DefaultApi {
  async create(payload: any): Promise<EnrollmentDto> {
    const response = await enrollmentApiService.addEnrollments(payload);
    return response.data;
  }

  async getAll(): Promise<EnrollmentDto> {
    const response = await enrollmentApiService.getEnrollments();
    return response.data;
  }

  async getOne(enrollmentID: number): Promise<EnrollmentDto> {
    const response = await enrollmentApiService.getEnrollment(enrollmentID);
    return response.data;
  }

  async update(enrollmentID: number, payload: any) {
    const response = await enrollmentApiService.updateEnrollment(
      enrollmentID,
      payload,
    );
    return response.data;
  }

  async delete(enrollmentID: number) {
    const response = await enrollmentApiService.deleteEnrollment(enrollmentID);
    return response.data;
  }
}

const enrollmentService = new EnrollmentService();
export default enrollmentService;
