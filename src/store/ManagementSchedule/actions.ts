import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementScheduleStateInterface, ManagementSchedule } from './state';

const actions: ActionTree<ManagementScheduleStateInterface, StateInterface> = {
  addSchedule(context, payload: ManagementSchedule) {
    context.commit('setSchedule', payload);
  },

  editSchedule(context, payload: ManagementSchedule) {
    context.commit('setNewSchedule', payload);
  },

  deleteSchedule(context, payload: ManagementSchedule) {
    context.commit('deleteSchedule', payload);
  },
};

export default actions;
