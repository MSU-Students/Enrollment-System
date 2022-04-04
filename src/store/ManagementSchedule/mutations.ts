import { MutationTree } from 'vuex';
import { ManagementSchedule } from './state';
import { ManagementScheduleStateInterface } from './state';

const mutation: MutationTree<ManagementScheduleStateInterface> = {
  setNewSchedule(state, payload: ManagementSchedule) {
    state.newSchedule = payload;
  },
  updateSchedule(state, payload: ManagementSchedule) {
    state.newSchedule = payload;
  },
  deleteSchedule(state, payload: any) {
    state.AllSchedule.push(payload);
  },
  getAllSchedules(state, payload) {
    state.AllSchedule = [];
    state.AllSchedule.push(...payload);
  },

  getOneSchedule(state, payload) {
    state.AllSchedule = payload;
  },
};

export default mutation;
