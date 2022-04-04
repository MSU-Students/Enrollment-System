import { MutationTree } from 'vuex';
import { ManagementSubject, ManagementSubjectStateInterface } from './state';

const mutation: MutationTree<ManagementSubjectStateInterface> = {
  setNewSubject(state, payload: ManagementSubject) {
    state.newSubject = payload;
  },
  updateSubject(state, payload: ManagementSubject) {
    state.newSubject = payload;
  },
  deleteSubject(state, payload: any) {
    state.AllSubject.push(payload);
  },
  getAllSubjects(state, payload) {
    state.AllSubject = [];
    state.AllSubject.push(...payload);
  },

  getOneSubject(state, payload) {
    state.AllSubject = payload;
  },
};

export default mutation;
