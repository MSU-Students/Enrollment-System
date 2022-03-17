import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear2ndSemStateInterface, IThirdYear2ndSemInfo } from './state';

const actions: ActionTree<ThirdYear2ndSemStateInterface, StateInterface> = {
  addThirdYear2ndSem(context, payload: IThirdYear2ndSemInfo) {
    context.commit('setThirdYear2ndSem', payload);
  },

  editThirdYear2ndSem(context, payload: IThirdYear2ndSemInfo) {
    context.commit('setNewThirdYear2ndSem', payload);
  },

  deleteThirdYear2ndSem(context, payload: IThirdYear2ndSemInfo) {
    context.commit('deleteThirdYear2ndSem', payload);
  },
};

export default actions;
