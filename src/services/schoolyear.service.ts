import { SchoolYearDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class SchoolYearService extends DefaultApi {
  async create(payload: any): Promise<SchoolYearDto> {
    const response = await enrollmentApiService.addSchoolYears(payload);
    return response.data;
  }

  async getAll(): Promise<SchoolYearDto> {
    const response = await enrollmentApiService.getSchoolYears();
    return response.data;
  }

  async getOne(SchoolYearID: number): Promise<SchoolYearDto> {
    const response = await enrollmentApiService.getSchoolYear(SchoolYearID);
    return response.data;
  }

  async update(SchoolYearID: number, payload: any) {
    const response = await enrollmentApiService.updateSchoolYear(
      SchoolYearID,
      payload,
    );
    return response.data;
  }

  async delete(SchoolYearID: number) {
    const response = await enrollmentApiService.deleteSchoolYear(SchoolYearID);
    return response.data;
  }
}

const schoolyearService = new SchoolYearService();
export default schoolyearService;
