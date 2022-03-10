import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementTeacherStateInterface, ManagementTeacher } from './state';

const actions: ActionTree<ManagementTeacherStateInterface, StateInterface> = {
  addTeacher(context, payload: ManagementTeacher) {
    context.commit('setTeacher', payload);
  },

  editTeacher(context, payload: ManagementTeacher) {
    context.commit('setNewTeacher', payload);
  },

  deleteTeacher(context, payload: ManagementTeacher) {
    context.commit('deleteTeacher', payload);
  },
};

export default actions;
