import { MutationTree } from 'vuex';
import { IThirdYear2ndSemInfo, ThirdYear2ndSemStateInterface } from './state';

const mutation: MutationTree<ThirdYear2ndSemStateInterface> = {
  setThirdYear2ndSem(state, payload: IThirdYear2ndSemInfo) {
    state.allThirdYear2ndSem.push(payload);
  },
  getAllThirdyear2ndsem(state, payload) {
    state.allThirdYear2ndSem = [];
    state.allThirdYear2ndSem.push(...payload);
  },
  getOneThirdYear2ndsem(state, payload) {
    state.allThirdYear2ndSem = payload;
  },
};

export default mutation;
