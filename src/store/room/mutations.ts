import { MutationTree } from 'vuex';
import { roomStateInterface } from './state';

const mutation: MutationTree<roomStateInterface> = {
  setRoom(state, payload) {
    state.newRoom = payload;
  },
  updateRoom(state, payload) {
    state.newRoom = payload;
  },
  deleteRoom(state, payload) {
    state.AllRoom.push(payload);
  },

  getAllRoom(state, payload) {
    state.AllRoom = [];
    state.AllRoom.push(...payload);
  },

  getOneRoom(state, payload) {
    state.AllRoom = payload;
  },
};

export default mutation;
