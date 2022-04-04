import { ScheduleDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class ScheduleService extends DefaultApi {
  async create(payload: any): Promise<ScheduleDto> {
    const response = await enrollmentApiService.addSchedule(payload);
    return response.data;
  }

  async getAll(): Promise<ScheduleDto> {
    const response = await enrollmentApiService.getAllSchedules();
    return response.data;
  }

  async getOne(ScheduleID: number): Promise<ScheduleDto> {
    const response = await enrollmentApiService.getSchedule(ScheduleID);
    return response.data;
  }

  async update(ScheduleID: number, payload: any) {
    const response = await enrollmentApiService.updateSchedule(
      ScheduleID,
      payload,
    );
    return response.data;
  }

  async delete(ScheduleID: number) {
    const response = await enrollmentApiService.deleteOneSchedule(ScheduleID);
    return response.data;
  }
}

const scheduleService = new ScheduleService();
export default scheduleService;
