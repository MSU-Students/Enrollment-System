import { MutationTree } from 'vuex';
import { ISecondYear1stSemInfo, SecondYear1stSemStateInterface } from './state';

const mutation: MutationTree<SecondYear1stSemStateInterface> = {
  setSecondYear1stSem(state, payload: ISecondYear1stSemInfo) {
    state.allSecondYear1stSem.push(payload);
  },
  getAllSecondYear(state, payload) {
    state.allSecondYear1stSem = [];
    state.allSecondYear1stSem.push(...payload);
  },
  getOneSecondYear(state, payload) {
    state.allSecondYear1stSem = payload;
  },
};

export default mutation;
