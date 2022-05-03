import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Firstyear1stsemDto } from './restapi';

class Firstyear1stsemService extends DefaultApi {
  async create(payload: any): Promise<Firstyear1stsemDto> {
    const response = await enrollmentApiService.add1stSubjectfor1styear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Firstyear1stsemDto> {
    const response = await enrollmentApiService.get1stSubjectfor1styear();
    return response.data;
  }

  async getOne(firstyear1stSemID: number): Promise<Firstyear1stsemDto> {
    const response = await enrollmentApiService.getAll1stSubjectsfor1styear(
      firstyear1stSemID,
    );
    return response.data;
  }

  async update(firstyear1stSemID: number, payload: any) {
    const response = await enrollmentApiService.update1stSubjectfor1styear(
      firstyear1stSemID,
      payload,
    );
    return response.data;
  }

  async delete(firstyear1stSemID: number) {
    const response = await enrollmentApiService.deleteSubjectsfor1styear(
      firstyear1stSemID,
    );
    return response.data;
  }
}

const firstyear1stsemService = new Firstyear1stsemService();
export default firstyear1stsemService;
