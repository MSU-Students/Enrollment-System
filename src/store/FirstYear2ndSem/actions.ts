import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYear2ndSemStateInterface, IFirstYear2ndSemInfo } from './state';

const actions: ActionTree<FirstYear2ndSemStateInterface, StateInterface> = {
  addFirstYear2ndSem(context, payload: IFirstYear2ndSemInfo) {
    context.commit('setFirstYear2ndSem', payload);
  },

  editFirstYear2ndSem(context, payload: IFirstYear2ndSemInfo) {
    context.commit('setNewFirstYear2ndSem', payload);
  },

  deleteFirstYear2ndSem(context, payload: IFirstYear2ndSemInfo) {
    context.commit('deleteFirstYear2ndSem', payload);
  },
};

export default actions;
