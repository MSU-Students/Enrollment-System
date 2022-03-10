import { MutationTree } from 'vuex';
import { ManagementSchedule, ManagementScheduleStateInterface } from './state';

const mutation: MutationTree<ManagementScheduleStateInterface> = {
  setSchedule(state, payload: ManagementSchedule) {
    state.manageSchedule.push(payload);
  },
  setNewSchedule(state, payload: ManagementSchedule) {
    const index = state.manageSchedule.findIndex(
      (s) => s.scheduleID === payload.scheduleID  
    );
    if (index >= 0) {
      state.manageSchedule.splice(index, 1, payload);
    }
  },
  deleteSchedule(state, payload: ManagementSchedule) {
    const index = state.manageSchedule.findIndex(
      (s) => s.scheduleID === payload.scheduleID
    );
    if (index >= 0) {
      state.manageSchedule.splice(index, 1);
    }
  },
};

export default mutation;
