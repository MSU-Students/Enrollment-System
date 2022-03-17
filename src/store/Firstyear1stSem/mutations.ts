import { MutationTree } from 'vuex';
import { IFirstYearInfo, FirstYearStateInterface } from './state';

const mutation: MutationTree<FirstYearStateInterface> = {
  setFirstYear(state, payload: IFirstYearInfo) {
    state.allFirsYear.push(payload);
  },
  setNewFirstYear(state, payload: IFirstYearInfo) {
    const index = state.allFirsYear.findIndex(
      (s) => s.firstyear1stSemID === payload.firstyear1stSemID,
    );
    if (index >= 0) {
      state.allFirsYear.splice(index, 1, payload);
    }
  },
  deleteFirstYear(state, payload: IFirstYearInfo) {
    const index = state.allFirsYear.findIndex(
      (s) => s.firstyear1stSemID === payload.firstyear1stSemID,
    );
    if (index >= 0) {
      state.allFirsYear.splice(index, 1);
    }
  },
};

export default mutation;
