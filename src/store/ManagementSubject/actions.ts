import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementSubjectStateInterface, ManagementSubject } from './state';

const actions: ActionTree<ManagementSubjectStateInterface, StateInterface> = {
  addSubject(context, payload: ManagementSubject) {
    context.commit('setSubject', payload);
  },

  editSubject(context, payload: ManagementSubject) {
    context.commit('setNewSubject', payload);
  },

  deleteSubject(context, payload: ManagementSubject) {
    context.commit('deleteSubject', payload);
  },
};

export default actions;
