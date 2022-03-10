import { MutationTree } from 'vuex';
import { IThirdYear2ndSemInfo, ThirdYear2ndSemStateInterface } from './state';

const mutation: MutationTree<ThirdYear2ndSemStateInterface> = {
  setThirdYear2ndSem(state, payload: IThirdYear2ndSemInfo) {
    state.allThirdYear2ndSem.push(payload);
  },
  setNewThirdYear2ndSem(state, payload: IThirdYear2ndSemInfo) {
    const index = state.allThirdYear2ndSem.findIndex(
      (s) => s.thirdYear2ndSemID === payload.thirdYear2ndSemID
    );
    if (index >= 0) {
      state.allThirdYear2ndSem.splice(index, 1, payload);
    }
  },
  deleteThirdYear2ndSem(state, payload: IThirdYear2ndSemInfo) {
    const index = state.allThirdYear2ndSem.findIndex(
      (s) => s.thirdYear2ndSemID === payload.thirdYear2ndSemID
    );
    if (index >= 0) {
      state.allThirdYear2ndSem.splice(index, 1);
    }
  },
};

export default mutation;
