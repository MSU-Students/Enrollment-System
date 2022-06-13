import { MutationTree } from 'vuex';
import { EnrollmentStateInterface } from './state';

const mutation: MutationTree<EnrollmentStateInterface> = {
  setenrollment(state, payload) {
    state.newEnrollment = payload;
  },
  updateenrollment(state, payload) {
    state.newEnrollment = payload;
  },
  deleteenrollment(state, payload) {
    state.AllEnrollment.push(payload);
  },

  getAllEnrollment(state, payload) {
    state.AllEnrollment = [];
    state.AllEnrollment.push(...payload);
  },

  getOneenrollment(state, payload) {
    state.AllEnrollment = payload;
  },
};

export default mutation;
