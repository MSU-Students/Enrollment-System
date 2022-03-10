import { MutationTree } from 'vuex';
import { IFirstYear2ndSemInfo, FirstYear2ndSemStateInterface } from './state';

const mutation: MutationTree<FirstYear2ndSemStateInterface> = {
  setFirstYear2ndSem(state, payload: IFirstYear2ndSemInfo) {
    state.allFirstYear2ndSem.push(payload);
  },
  setNewFirstYear2ndSem(state, payload: IFirstYear2ndSemInfo) {
    const index = state.allFirstYear2ndSem.findIndex(
      (s) => s.firstYear2ndSemID === payload.firstYear2ndSemID
    );
    if (index >= 0) {
      state.allFirstYear2ndSem.splice(index, 1, payload);
    }
  },
  deleteFirstYear2ndSem(state, payload: IFirstYear2ndSemInfo) {
    const index = state.allFirstYear2ndSem.findIndex(
      (s) => s.firstYear2ndSemID === payload.firstYear2ndSemID
    );
    if (index >= 0) {
      state.allFirstYear2ndSem.splice(index, 1);
    }
  },
};

export default mutation;
