import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementRoomStateInterface, ManagementRoom } from './state';

const actions: ActionTree<ManagementRoomStateInterface, StateInterface> = {
  addRoom(context, payload: ManagementRoom) {
    context.commit('setRoom', payload);
  },

  editRoom(context, payload: ManagementRoom) {
    context.commit('setNewRoom', payload);
  },

  deleteRoom(context, payload: ManagementRoom) {
    context.commit('deleteRoom', payload);
  },
};

export default actions;
