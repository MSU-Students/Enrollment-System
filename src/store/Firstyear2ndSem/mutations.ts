import { MutationTree } from 'vuex';
import { IFirstYear2ndSemInfo, FirstYear2ndSemStateInterface } from './state';

const mutation: MutationTree<FirstYear2ndSemStateInterface> = {
  setFirstYear2ndSem(state, payload: IFirstYear2ndSemInfo) {
    state.allFirstYear2ndSem.push(payload);
  },
  getallFirstYear2ndSem(state, payload) {
    state.allFirstYear2ndSem = [];
    state.allFirstYear2ndSem.push(...payload);
  },

  getOneFirstYear(state, payload) {
    state.allFirstYear2ndSem = payload;
  },
};

export default mutation;
