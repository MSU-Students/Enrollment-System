import { MutationTree } from 'vuex';
import { IFourthYear2ndSemInfo, FourthYear2ndSemStateInterface } from './state';

const mutation: MutationTree<FourthYear2ndSemStateInterface> = {
  setFourYear1stSem(state, payload: IFourthYear2ndSemInfo) {
    state.allFourthYear2ndSem.push(payload);
  },
  getAllThirdyear1stsem(state, payload) {
    state.allFourthYear2ndSem = [];
    state.allFourthYear2ndSem.push(...payload);
  },
  getOneThirdYear1stsem(state, payload) {
    state.allFourthYear2ndSem = payload;
  },
};

export default mutation;
