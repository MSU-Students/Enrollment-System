import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementRoomStateInterface } from './state';
import roomService from 'src/services/room.service';

const actions: ActionTree<ManagementRoomStateInterface, StateInterface> = {
  async addRoom(context, payload: any): Promise<any> {
    const result = await roomService.create(payload);
    context.commit('setRoom', result);
    await context.dispatch('getAllRoom');
  },

  async editRoom(context, payload: any): Promise<void> {
    const result = await roomService.update(payload.roomid, payload);
    context.commit('updateRoom', result);
    await context.dispatch('getAllRoom');
  },

  async deleteRoom(context, roomID: number): Promise<any> {
    const result = await roomService.delete(roomID);
    context.commit('deleteRoom', result);
  },

  async getAllRoom(context): Promise<any> {
    const res = await roomService.getAll();
    context.commit('getAllRoom', res);
  },

  async getOneRoom(context, roomID: number): Promise<any> {
    const res = await roomService.getOne(roomID);
    context.commit('getOneRoom', res);
  },
};

export default actions;
