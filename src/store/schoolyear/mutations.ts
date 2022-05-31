import { MutationTree } from 'vuex';
import { schoolyearStateInterface } from './state';

const mutation: MutationTree<schoolyearStateInterface> = {
  setnewSchoolYear(state, payload) {
    state.newSchoolYear = payload;
  },
  updateSchoolYear(state, payload) {
    state.newSchoolYear = payload;
  },
  deleteSchoolYear(state, payload) {
    state.allSchoolYear.push(payload);
  },

  getAllSchoolYear(state, payload) {
    state.allSchoolYear = [];
    state.allSchoolYear.push(...payload);
  },

  getOneSchoolYear(state, payload) {
    state.allSchoolYear = payload;
  },

  getProfile(state, payload) {
    state.allSchoolYear = payload;
  },
};
export default mutation;
