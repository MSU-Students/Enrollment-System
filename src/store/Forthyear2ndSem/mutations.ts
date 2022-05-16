import { MutationTree } from 'vuex';
import { IFourthYear2ndSemInfo, FourthYear2ndSemStateInterface } from './state';

const mutation: MutationTree<FourthYear2ndSemStateInterface> = {
  setNewFourYear1stSem(state, payload: IFourthYear2ndSemInfo) {
    state.newFourthYear2ndSem = payload;
  },
  getAllFourthyear2ndsem(state, payload) {
    state.allFourthYear2ndSem = [];
    state.allFourthYear2ndSem.push(...payload);
  },
  getOneFourthYear2ndsem(state, payload) {
    state.allFourthYear2ndSem = payload;
  },
};

export default mutation;
