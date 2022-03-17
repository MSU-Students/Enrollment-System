import { MutationTree } from 'vuex';
import { ManagementSubject, ManagementSubjectStateInterface } from './state';

const mutation: MutationTree<ManagementSubjectStateInterface> = {
  setSubject(state, payload: ManagementSubject) {
    state.manageSubject.push(payload);
  },
  setNewSubject(state, payload: ManagementSubject) {
    const index = state.manageSubject.findIndex(
      (s) => s.subjectID === payload.subjectID  
    );
    if (index >= 0) {
      state.manageSubject.splice(index, 1, payload);
    }
  },
  deleteSubject(state, payload: ManagementSubject) {
    const index = state.manageSubject.findIndex(
      (s) => s.subjectID === payload.subjectID
    );
    if (index >= 0) {
      state.manageSubject.splice(index, 1);
    }
  },
};

export default mutation;
