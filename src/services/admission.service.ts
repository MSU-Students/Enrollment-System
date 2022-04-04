import { AdmissionDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class AdmissionService extends DefaultApi {
  async create(payload: any): Promise<AdmissionDto> {
    const response = await enrollmentApiService.addAdmissions(payload);
    return response.data;
  }

  async getAll(): Promise<AdmissionDto> {
    const response = await enrollmentApiService.getAdmissions();
    return response.data;
  }

  async getOne(admissionID: number): Promise<AdmissionDto> {
    const response = await enrollmentApiService.getAdmission(admissionID);
    return response.data;
  }

  async update(admissionID: number, payload: any) {
    const response = await enrollmentApiService.updateAdmissions(
      admissionID,
      payload,
    );
    return response.data;
  }

  async delete(admissionID: number) {
    const response = await enrollmentApiService.deleteAdmissions(admissionID);
    return response.data;
  }
}

const admissionService = new AdmissionService();
export default admissionService;
