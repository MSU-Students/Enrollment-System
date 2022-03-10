import { MutationTree } from 'vuex';
import { ManagementTeacher, ManagementTeacherStateInterface } from './state';

const mutation: MutationTree<ManagementTeacherStateInterface> = {
  setTeacher(state, payload: ManagementTeacher) {
    state.manageTeacher.push(payload);
  },
  setNewTeacher(state, payload: ManagementTeacher) {
    const index = state.manageTeacher.findIndex(
      (s) => s.teacherID === payload.teacherID  
    );
    if (index >= 0) {
      state.manageTeacher.splice(index, 1, payload);
    }
  },
  deleteTeacher(state, payload: ManagementTeacher) {
    const index = state.manageTeacher.findIndex(
      (s) => s.teacherID === payload.teacherID
    );
    if (index >= 0) {
      state.manageTeacher.splice(index, 1);
    }
  },
};

export default mutation;
