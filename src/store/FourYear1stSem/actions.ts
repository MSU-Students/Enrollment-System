import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourYear1stSemStateInterface, IFourYear1stSemInfo } from './state';

const actions: ActionTree<FourYear1stSemStateInterface, StateInterface> = {
  addFourYear1stSem(context, payload: IFourYear1stSemInfo) {
    context.commit('setFourYear1stSem', payload);
  },

  editFourYear1stSem(context, payload: IFourYear1stSemInfo) {
    context.commit('setNewFourYear1stSem', payload);
  },

  deleteFourYear1stSem(context, payload: IFourYear1stSemInfo) {
    context.commit('deleteFourYear1stSem', payload);
  },
};

export default actions;
