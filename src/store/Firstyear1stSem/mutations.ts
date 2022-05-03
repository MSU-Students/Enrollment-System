import { MutationTree } from 'vuex';
import { FirstYearStateInterface } from './state';

const mutation: MutationTree<FirstYearStateInterface> = {
  setFirstYear(state, payload) {
    state.newFirstYear = payload;
  },

  getOneFirstYear(state, payload) {
    state.allFirstYear = payload;
  },

  getAllFirstyear(state, payload) {
    state.allFirstYear = [];
    state.allFirstYear.push(...payload);
  },
};

export default mutation;
