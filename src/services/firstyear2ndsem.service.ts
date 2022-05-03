import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Firstyear2ndsemDto } from './restapi';

class Firstyear2ndsemService extends DefaultApi {
  async create(payload: any): Promise<Firstyear2ndsemDto> {
    const response = await enrollmentApiService.add2ndSubjectsfor1styear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Firstyear2ndsemDto> {
    const response = await enrollmentApiService.get2ndSubjectfor1styear();
    return response.data;
  }

  async getOne(firstYear2ndSemID: number): Promise<Firstyear2ndsemDto> {
    const response = await enrollmentApiService.getAll2ndSubjectsfor1styear(
      firstYear2ndSemID,
    );
    return response.data;
  }

  async update(firstYear2ndSemID: number, payload: any) {
    const response = await enrollmentApiService.update2ndSubjectsfor1styear(
      firstYear2ndSemID,
      payload,
    );
    return response.data;
  }

  async delete(firstYear2ndSemID: number) {
    const response = await enrollmentApiService.deleteOneSubject(
      firstYear2ndSemID,
    );
    return response.data;
  }
}

const FirstYear2ndSemID = new Firstyear2ndsemService();
export default FirstYear2ndSemID;
