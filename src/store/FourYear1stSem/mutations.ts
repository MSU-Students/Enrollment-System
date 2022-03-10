import { MutationTree } from 'vuex';
import { IFourYear1stSemInfo, FourYear1stSemStateInterface } from './state';

const mutation: MutationTree<FourYear1stSemStateInterface> = {
  setFourYear1stSem(state, payload: IFourYear1stSemInfo) {
    state.allFourYear1stSem.push(payload);
  },
  setNewFourYear1stSem(state, payload: IFourYear1stSemInfo) {
    const index = state.allFourYear1stSem.findIndex(
      (s) => s.fourYear1stSemID === payload.fourYear1stSemID
    );
    if (index >= 0) {
      state.allFourYear1stSem.splice(index, 1, payload);
    }
  },
  deleteFourYear1stSem(state, payload: IFourYear1stSemInfo) {
    const index = state.allFourYear1stSem.findIndex(
      (s) => s.fourYear1stSemID === payload.fourYear1stSemID
    );
    if (index >= 0) {
      state.allFourYear1stSem.splice(index, 1);
    }
  },
};

export default mutation;
