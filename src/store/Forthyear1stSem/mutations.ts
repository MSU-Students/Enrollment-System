import { MutationTree } from 'vuex';
import { IFourthYear1stSemInfo, FourthYear1stSemStateInterface } from './state';

const mutation: MutationTree<FourthYear1stSemStateInterface> = {
  setFourYear1stSem(state, payload: IFourthYear1stSemInfo) {
    state.allFourthYear1stSem.push(payload);
  },
  getAllFourthyear1stsem(state, payload) {
    state.allFourthYear1stSem = [];
    state.allFourthYear1stSem.push(...payload);
  },
  getOneFourthYear1stsem(state, payload) {
    state.allFourthYear1stSem = payload;
  },
};

export default mutation;
