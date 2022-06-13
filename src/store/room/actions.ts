import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { roomStateInterface } from './state';
import RoomService from 'src/services/room.service';

const actions: ActionTree<roomStateInterface, StateInterface> = {
  async addRoom(context, payload: any): Promise<any> {
    const result = await RoomService.create(payload);
    context.commit('setRoom', result);
    await context.dispatch('getAllRoom');
  },

  async editRoom(context, payload: any): Promise<void> {
    const result = await RoomService.update(payload.roomID, payload);
    context.commit('updateRoom', result);
    await context.dispatch('getAllRoom');
  },

  async deleteRoom(context, roomID: number): Promise<any> {
    const result = await RoomService.delete(roomID);
    context.commit('deleteRoom', result);
  },

  async getAllRoom(context): Promise<any> {
    const res = await RoomService.getAll();
    context.commit('getAllRoom', res);
  },

  async getOneRoom(context, roomID: number): Promise<any> {
    const res = await RoomService.getOne(roomID);
    context.commit('getOneRoom', res);
  },
};

export default actions;
