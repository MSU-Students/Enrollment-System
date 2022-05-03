import { MutationTree } from 'vuex';
import { ISecondYear2ndSemInfo, SecondYear2ndSemStateInterface } from './state';

const mutation: MutationTree<SecondYear2ndSemStateInterface> = {
  setSecondYear2ndSem(state, payload: ISecondYear2ndSemInfo) {
    state.allSecondYear2ndSem.push(payload);
  },
  getallSecondYear2ndSem(state, payload) {
    state.allSecondYear2ndSem = [];
    state.allSecondYear2ndSem.push(...payload);
  },

  getOneFirstYear(state, payload) {
    state.allSecondYear2ndSem = payload;
  },
};

export default mutation;
