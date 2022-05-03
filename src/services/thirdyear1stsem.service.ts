import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Thirdyear1stsemDto } from './restapi';

class Thirdyear1stsemService extends DefaultApi {
  async create(payload: any): Promise<Thirdyear1stsemDto> {
    const response = await enrollmentApiService.add1stSubjectfor3rdyear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Thirdyear1stsemDto> {
    const response = await enrollmentApiService.get1stSubjectfor13rdyear();
    return response.data;
  }

  async getOne(thirdyear1stSemID: number): Promise<Thirdyear1stsemDto> {
    const response = await enrollmentApiService.getAll1stSubjectsfor3rdyear(
      thirdyear1stSemID,
    );
    return response.data;
  }

  async update(thirdyear1stSemID: number, payload: any) {
    const response = await enrollmentApiService.update1stSubjectfor3rdyear(
      thirdyear1stSemID,
      payload,
    );
    return response.data;
  }
}

const thirdyear1stsemService = new Thirdyear1stsemService();
export default thirdyear1stsemService;
