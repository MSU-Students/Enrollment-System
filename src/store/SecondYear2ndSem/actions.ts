import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear2ndSemStateInterface, ISecondYear2ndSemInfo } from './state';

const actions: ActionTree<SecondYear2ndSemStateInterface, StateInterface> = {
  addSecondYear2ndSem(context, payload: ISecondYear2ndSemInfo) {
    context.commit('setSecondYear2ndSem', payload);
  },

  editSecondYear2ndSem(context, payload: ISecondYear2ndSemInfo) {
    context.commit('setNewSecondYear2ndSem', payload);
  },

  deleteSecondYear2ndSem(context, payload: ISecondYear2ndSemInfo) {
    context.commit('deleteSecondYear2ndSem', payload);
  },
};

export default actions;
