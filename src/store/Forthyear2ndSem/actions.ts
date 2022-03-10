import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourYear2ndSemStateInterface, IFourYear2ndSemInfo } from './state';

const actions: ActionTree<FourYear2ndSemStateInterface, StateInterface> = {
  addFourYear2ndSem(context, payload: IFourYear2ndSemInfo) {
    context.commit('setFourYear2ndSem', payload);
  },

  editFourYear2ndSem(context, payload: IFourYear2ndSemInfo) {
    context.commit('setNewFourYear2ndSem', payload);
  },

  deleteFourYear2ndSem(context, payload: IFourYear2ndSemInfo) {
    context.commit('deleteFourYear2ndSem', payload);
  },
};

export default actions;
