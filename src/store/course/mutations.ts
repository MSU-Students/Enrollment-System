import { MutationTree } from 'vuex';
import { courseStateInterface } from './state';

const mutation: MutationTree<courseStateInterface> = {
  setCourse(state, payload) {
    state.newCourse = payload;
  },
  updateCourse(state, payload) {
    state.newCourse = payload;
  },
  deleteCourse(state, payload) {
    state.AllCourse.push(payload);
  },

  getAllCourse(state, payload) {
    state.AllCourse = [];
    state.AllCourse.push(...payload);
  },

  getOneCourse(state, payload) {
    state.AllCourse = payload;
  },
};

export default mutation;
