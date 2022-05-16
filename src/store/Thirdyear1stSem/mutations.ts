import { MutationTree } from 'vuex';
import { IThirdYear1stSemInfo, ThirdYear1stSemStateInterface } from './state';

const mutation: MutationTree<ThirdYear1stSemStateInterface> = {
  setThirdYear1stSem(state, payload) {
    state.newThirdYear1stsem = payload;
  },
  getAllThirdyear1stsem(state, payload) {
    state.allThirdYear1stSem = [];
    state.allThirdYear1stSem.push(...payload);
  },
  getOneThirdYear1stsem(state, payload) {
    state.allThirdYear1stSem = payload;
  },
};

export default mutation;
