import { MutationTree } from 'vuex';
import { SchedulingStateInterface } from './state';

const mutation: MutationTree<SchedulingStateInterface> = {
  setschedule(state, payload) {
    state.newSchedule = payload;
  },
  updateschedule(state, payload) {
    state.newSchedule = payload;
  },
  deleteschedule(state, payload) {
    state.AllSchedule.push(payload);
  },

  getAllschedule(state, payload) {
    state.AllSchedule = [];
    state.AllSchedule.push(...payload);
  },

  getOneschedule(state, payload) {
    state.AllSchedule = payload;
  },
};

export default mutation;
