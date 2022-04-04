import { MutationTree } from 'vuex';
import { ManagementTeacher } from './state';
import { ManagementTeacherStateInterface } from './state';

const mutation: MutationTree<ManagementTeacherStateInterface> = {
  setNewTeacher(state, payload: ManagementTeacher) {
    state.NewTeacher = payload;
  },
  updateTeacher(state, payload: ManagementTeacher) {
    state.NewTeacher = payload;
  },
  deleteTeacher(state, payload: any) {
    state.allTeacher.push(payload);
  },
  getAllTeacher(state, payload) {
    state.allTeacher = [];
    state.allTeacher.push(...payload);
  },

  getOneTeacher(state, payload) {
    state.allTeacher = payload;
  },
};

export default mutation;
