import { MutationTree } from 'vuex';
import { ISecondYear1stSemInfo, SecondYear1stSemStateInterface } from './state';

const mutation: MutationTree<SecondYear1stSemStateInterface> = {
  setSecondYear1stSem(state, payload: ISecondYear1stSemInfo) {
    state.allSecondYear1stSem.push(payload);
  },
  setNewSecondYear1stSem(state, payload: ISecondYear1stSemInfo) {
    const index = state.allSecondYear1stSem.findIndex(
      (s) => s.secondYear1stSemID === payload.secondYear1stSemID,
    );
    if (index >= 0) {
      state.allSecondYear1stSem.splice(index, 1, payload);
    }
  },
  deleteSecondYear1stSem(state, payload: ISecondYear1stSemInfo) {
    const index = state.allSecondYear1stSem.findIndex(
      (s) => s.secondYear1stSemID === payload.secondYear1stSemID,
    );
    if (index >= 0) {
      state.allSecondYear1stSem.splice(index, 1);
    }
  },
};

export default mutation;
