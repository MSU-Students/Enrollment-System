import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, SchedulingDto } from './restapi/api';

class SchedulingService extends DefaultApi {
  async create(payload: any): Promise<SchedulingDto> {
    const response = await enrollmentApiService.addSchedulings(payload);
    return response.data;
  }

  async getAll(): Promise<SchedulingDto> {
    const response = await enrollmentApiService.getSchedulings();
    return response.data;
  }

  async getOne(schedulingID: number): Promise<SchedulingDto> {
    const response = await enrollmentApiService.getScheduling(schedulingID);
    return response.data;
  }

  async update(schedulingID: number, payload: any) {
    const response = await enrollmentApiService.updateScheduling(
      schedulingID,
      payload,
    );
    return response.data;
  }

  async delete(schedulingID: number) {
    const response = await enrollmentApiService.deleteScheduling(schedulingID);
    return response.data;
  }
}

const schedulingService = new SchedulingService();
export default schedulingService;
