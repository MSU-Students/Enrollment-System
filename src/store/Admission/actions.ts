import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdmissionStateInterface, IStudentInfo } from './state';

const actions: ActionTree<AdmissionStateInterface, StateInterface> = {
  addNewStudent(context, payload: IStudentInfo) {
    context.commit('setStudentInfo', payload);
  },
  ediStudentInfo(context, payload: IStudentInfo) {
    context.commit('setNewAccount', payload);
  },

  deleteStudent(context, payload: IStudentInfo) {
    context.commit('deleteAccount', payload);
  },
};

export default actions;
