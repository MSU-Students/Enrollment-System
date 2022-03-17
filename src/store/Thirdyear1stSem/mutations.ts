import { MutationTree } from 'vuex';
import { IThirdYear1stSemInfo, ThirdYear1stSemStateInterface } from './state';

const mutation: MutationTree<ThirdYear1stSemStateInterface> = {
  setThirdYear1stSem(state, payload: IThirdYear1stSemInfo) {
    state.allThirdYear1stSem.push(payload);
  },
  setNewThirdYear1stSem(state, payload: IThirdYear1stSemInfo) {
    const index = state.allThirdYear1stSem.findIndex(
      (s) => s.thirdYear1stSemID === payload.thirdYear1stSemID,
    );
    if (index >= 0) {
      state.allThirdYear1stSem.splice(index, 1, payload);
    }
  },
  deleteThirdYear1stSem(state, payload: IThirdYear1stSemInfo) {
    const index = state.allThirdYear1stSem.findIndex(
      (s) => s.thirdYear1stSemID === payload.thirdYear1stSemID,
    );
    if (index >= 0) {
      state.allThirdYear1stSem.splice(index, 1);
    }
  },
};

export default mutation;
