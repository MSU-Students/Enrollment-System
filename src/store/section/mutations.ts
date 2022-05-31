import { MutationTree } from 'vuex';
import { sectionStateInterface } from './state';

const mutation: MutationTree<sectionStateInterface> = {
  setsection(state, payload) {
    state.newSection = payload;
  },
  updatesection(state, payload) {
    state.newSection = payload;
  },
  deletesection(state, payload) {
    state.AllSection.push(payload);
  },

  getAllsection(state, payload) {
    state.AllSection = [];
    state.AllSection.push(...payload);
  },

  getOnesection(state, payload) {
    state.AllSection = payload;
  },
};

export default mutation;
