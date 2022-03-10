import { MutationTree } from 'vuex';
import { IFourYear2ndSemInfo, FourYear2ndSemStateInterface } from './state';

const mutation: MutationTree<FourYear2ndSemStateInterface> = {
  setFourYear2ndSem(state, payload: IFourYear2ndSemInfo) {
    state.allFourYear2ndSem.push(payload);
  },
  setNewFourYear2ndSem(state, payload: IFourYear2ndSemInfo) {
    const index = state.allFourYear2ndSem.findIndex(
      (s) => s.fourYear2ndSemID === payload.fourYear2ndSemID,
    );
    if (index >= 0) {
      state.allFourYear2ndSem.splice(index, 1, payload);
    }
  },
  deleteFourYear2ndSem(state, payload: IFourYear2ndSemInfo) {
    const index = state.allFourYear2ndSem.findIndex(
      (s) => s.fourYear2ndSemID === payload.fourYear2ndSemID,
    );
    if (index >= 0) {
      state.allFourYear2ndSem.splice(index, 1);
    }
  },
};

export default mutation;
