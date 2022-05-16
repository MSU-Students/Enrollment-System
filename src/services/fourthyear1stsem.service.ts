import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, Fourthyear1stsemDto } from './restapi';

class Fourthyear1stsemService extends DefaultApi {
  async create(payload: any): Promise<Fourthyear1stsemDto> {
    const response = await enrollmentApiService.add1stSubjectfor4thyear(
      payload,
    );
    return response.data;
  }

  async getAll(): Promise<Fourthyear1stsemDto> {
    const response = await enrollmentApiService.get1stSubjectfor4thyear();
    return response.data;
  }

  async getOne(fourthyear1stSemID: number): Promise<Fourthyear1stsemDto> {
    const response = await enrollmentApiService.getAll1stSubjectsfor4thyear(
      fourthyear1stSemID,
    );
    return response.data;
  }

  async update(fourthyear1stSemID: number, payload: any) {
    const response = await enrollmentApiService.update1stSubjectfor4thyear(
      fourthyear1stSemID,
      payload,
    );
    return response.data;
  }

  async delete(fourthyear1stSemID: number) {
    const response = await enrollmentApiService.deleteSubjectsfor4thyear(
      fourthyear1stSemID,
    );
    return response.data;
  }
}

const fourthyear1stsemService = new Fourthyear1stsemService();
export default fourthyear1stsemService;
