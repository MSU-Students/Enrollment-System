import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Thirdyear2ndsemDto } from './restapi';

class Thirdyear2ndsemService extends DefaultApi {
  async create(payload: any): Promise<Thirdyear2ndsemDto> {
    const response = await enrollmentApiService.add2ndSubjectsfor3rdyear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Thirdyear2ndsemDto> {
    const response = await enrollmentApiService.get2ndSubjectfor3rdyear();
    return response.data;
  }

  async getOne(secondYear2ndSemID: number): Promise<Thirdyear2ndsemDto> {
    const response = await enrollmentApiService.getAll2ndSubjectsfor3rdyear(
      secondYear2ndSemID,
    );
    return response.data;
  }

  async update(secondYear2ndSemID: number, payload: any) {
    const response = await enrollmentApiService.update2ndSubjectsfor3rdyear(
      secondYear2ndSemID,
      payload,
    );
    return response.data;
  }
}

const thirdyear2ndsemService = new Thirdyear2ndsemService();
export default thirdyear2ndsemService;
