import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYearStateInterface, IFirstYearInfo } from './state';

const actions: ActionTree<FirstYearStateInterface, StateInterface> = {
  addFirstYear(context, payload: IFirstYearInfo) {
    context.commit('setFirstYear', payload);
  },

  editFirstYear(context, payload: IFirstYearInfo) {
    context.commit('setNewFirstYear', payload);
  },

  deleteFirstYear(context, payload: IFirstYearInfo) {
    context.commit('deleteFirstYear', payload);
  },
};

export default actions;
