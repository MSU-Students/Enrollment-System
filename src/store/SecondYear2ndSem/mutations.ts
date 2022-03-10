import { MutationTree } from 'vuex';
import { ISecondYear2ndSemInfo, SecondYear2ndSemStateInterface } from './state';

const mutation: MutationTree<SecondYear2ndSemStateInterface> = {
  setSecondYear2ndSem(state, payload: ISecondYear2ndSemInfo) {
    state.allSecondYear2ndSem.push(payload);
  },
  setNewSecondYear2ndSem(state, payload: ISecondYear2ndSemInfo) {
    const index = state.allSecondYear2ndSem.findIndex(
      (s) => s.secondYear2ndSemID === payload.secondYear2ndSemID
    );
    if (index >= 0) {
      state.allSecondYear2ndSem.splice(index, 1, payload);
    }
  },
  deleteSecondYear2ndSem(state, payload: ISecondYear2ndSemInfo) {
    const index = state.allSecondYear2ndSem.findIndex(
      (s) => s.secondYear2ndSemID === payload.secondYear2ndSemID
    );
    if (index >= 0) {
      state.allSecondYear2ndSem.splice(index, 1);
    }
  },
};

export default mutation;
