import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear1stSemStateInterface, ISecondYear1stSemInfo } from './state';

const actions: ActionTree<SecondYear1stSemStateInterface, StateInterface> = {
  addSecondYear1stSem(context, payload: ISecondYear1stSemInfo) {
    context.commit('setSecondYear1stSem', payload);
  },

  editSecondYear1stSem(context, payload: ISecondYear1stSemInfo) {
    context.commit('setNewSecondYear1stSem', payload);
  },

  deleteSecondYear1stSem(context, payload: ISecondYear1stSemInfo) {
    context.commit('deleteSecondYear1stSem', payload);
  },
};

export default actions;
