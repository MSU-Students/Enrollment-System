import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear1stSemStateInterface, IThirdYear1stSemInfo } from './state';

const actions: ActionTree<ThirdYear1stSemStateInterface, StateInterface> = {
  addThirdYear1stSem(context, payload: IThirdYear1stSemInfo) {
    context.commit('setThirdYear1stSem', payload);
  },

  editThirdYear1stSem(context, payload: IThirdYear1stSemInfo) {
    context.commit('setNewThirdYear1stSem', payload);
  },

  deleteThirdYear1stSem(context, payload: IThirdYear1stSemInfo) {
    context.commit('deleteThirdYear1stSem', payload);
  },
};

export default actions;
