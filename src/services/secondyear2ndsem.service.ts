import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Secondyear2ndsemDto } from './restapi';

class Secondyear2ndsemService extends DefaultApi {
  async create(payload: any): Promise<Secondyear2ndsemDto> {
    const response = await enrollmentApiService.add2ndSubjectsfor2ndyear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Secondyear2ndsemDto> {
    const response = await enrollmentApiService.get2ndSubjectfor2ndyear();
    return response.data;
  }

  async getOne(secondYear2ndSemID: number): Promise<Secondyear2ndsemDto> {
    const response = await enrollmentApiService.getAll2ndSubjectsfor2ndyear(
      secondYear2ndSemID,
    );
    return response.data;
  }

  async update(secondYear2ndSemID: number, payload: any) {
    const response = await enrollmentApiService.update2ndSubjectsfor2ndyear(
      secondYear2ndSemID,
      payload,
    );
    return response.data;
  }
}

const secondyear2ndsemService = new Secondyear2ndsemService();
export default secondyear2ndsemService;
