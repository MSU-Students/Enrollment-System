import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Fourthyear2ndsemDto } from './restapi';

class Fourthyear2ndsemService extends DefaultApi {
  async create(payload: any): Promise<Fourthyear2ndsemDto> {
    const response = await enrollmentApiService.add2ndSubjectsfor1styear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Fourthyear2ndsemDto> {
    const response = await enrollmentApiService.get2ndSubjectfor1styear();
    return response.data;
  }

  async getOne(fourthYear2ndSemID: number): Promise<Fourthyear2ndsemDto> {
    const response = await enrollmentApiService.getAll2ndSubjectsfor1styear(
      fourthYear2ndSemID,
    );
    return response.data;
  }

  async update(fourthYear2ndSemID: number, payload: any) {
    const response = await enrollmentApiService.update2ndSubjectsfor1styear(
      fourthYear2ndSemID,
      payload,
    );
    return response.data;
  }

  async delete(fourthYear2ndSemID: number) {
    const response = await enrollmentApiService.deleteOneSubject(
      fourthYear2ndSemID,
    );
    return response.data;
  }
}

const fourthyear2ndsemService = new Fourthyear2ndsemService();
export default fourthyear2ndsemService;
