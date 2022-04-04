import { UserDto } from './restapi';
import { enrollmentApiService } from './enrolment-api.service';
import { DefaultApi } from './restapi/api';

class UserService extends DefaultApi {
  async create(payload: UserDto): Promise<UserDto> {
    const response = await enrollmentApiService.addUser(payload);
    return response.data;
  }

  async getAll(): Promise<UserDto> {
    const response = await enrollmentApiService.getUsers();
    return response.data;
  }

  async getOne(id: number): Promise<UserDto> {
    const response = await enrollmentApiService.getUser(id);
    return response.data;
  }

  async update(id: number, payload: any) {
    const response = await enrollmentApiService.updateUser(id, payload);
    return response.data;
  }

  async delete(id: number) {
    const response = await enrollmentApiService.deleteUser(id);
    return response.data;
  }

  async getUserProfile() {
    const response = await enrollmentApiService.getProfile();
    return response.data;
  }
}

const userService = new UserService();
export default userService;
