import { enrollmentApiService } from './enrolment-api.service';
import { RoomDto, DefaultApi } from './restapi/api';

class RoomService extends DefaultApi {
  async create(payload: any): Promise<RoomDto> {
    const response = await enrollmentApiService.addRooms(payload);
    return response.data;
  }

  async getAll(): Promise<RoomDto> {
    const response = await enrollmentApiService.getRooms();
    return response.data;
  }

  async getOne(roomID: number): Promise<RoomDto> {
    const response = await enrollmentApiService.getRoomById(roomID);
    return response.data;
  }

  async update(roomID: number, payload: any) {
    const response = await enrollmentApiService.updateRoom(roomID, payload);
    return response.data;
  }

  async delete(roomID: number) {
    const response = await enrollmentApiService.deleteRoom(roomID);
    return response.data;
  }
}

const roomService = new RoomService();
export default roomService;
