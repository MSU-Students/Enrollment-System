import { MutationTree } from 'vuex';
import { recordsStateInterface } from './state';

const mutation: MutationTree<recordsStateInterface> = {
  setRecords(state, payload) {
    state.newRecords = payload;
  },
  updateRecords(state, payload) {
    state.newRecords = payload;
  },
  deleteRecords(state, payload) {
    state.AllRecords.push(payload);
  },

  getAllRecords(state, payload) {
    state.AllRecords = [];
    state.AllRecords.push(...payload);
  },

  getOneRecords(state, payload) {
    state.AllRecords = payload;
  },
};

export default mutation;
