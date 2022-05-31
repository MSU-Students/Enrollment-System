import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi, SectionDto } from './restapi/api';

class SectionService extends DefaultApi {
  async create(payload: any): Promise<SectionDto> {
    const response = await enrollmentApiService.addSections(payload);
    return response.data;
  }

  async getAll(): Promise<SectionDto> {
    const response = await enrollmentApiService.getSections();
    return response.data;
  }

  async getOne(sectionID: number): Promise<SectionDto> {
    const response = await enrollmentApiService.getSection(sectionID);
    return response.data;
  }

  async update(sectionID: number, payload: any) {
    const response = await enrollmentApiService.updateSection(
      sectionID,
      payload,
    );
    return response.data;
  }

  async delete(sectionID: number) {
    const response = await enrollmentApiService.deleteSection(sectionID);
    return response.data;
  }
}

const sectionService = new SectionService();
export default sectionService;
