import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Secondyear1stsemDto } from './restapi';

class Secondyear1stsemService extends DefaultApi {
  async create(payload: any): Promise<Secondyear1stsemDto> {
    const response = await enrollmentApiService.add1stSubjectfor2ndyear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Secondyear1stsemDto> {
    const response = await enrollmentApiService.get1stSubjectfor2ndyear();
    return response.data;
  }

  async getOne(secondyear1stSemID: number): Promise<Secondyear1stsemDto> {
    const response = await enrollmentApiService.getAll1stSubjectsfor2ndyear(
      secondyear1stSemID,
    );
    return response.data;
  }

  async update(secondyear1stSemID: number, payload: any) {
    const response = await enrollmentApiService.update1stSubjectfor2ndyear(
      secondyear1stSemID,
      payload,
    );
    return response.data;
  }
}

const secondyear1stsemService = new Secondyear1stsemService();
export default secondyear1stsemService;
