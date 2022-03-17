import { MutationTree } from 'vuex';
import { IStudentInfo } from './state';
import { AdmissionStateInterface } from './state';

const mutation: MutationTree<AdmissionStateInterface> = {
  setStudentInfo(state, payload: IStudentInfo) {
    state.allStudentInfo.push(payload);
  },
  setNewStudentInfo(state, payload: IStudentInfo) {
    const index = state.allStudentInfo.findIndex(
      (s) => s.admissionID === payload.admissionID,
    );
    if (index >= 0) {
      state.allStudentInfo.splice(index, 1, payload);
    }
  },
  deleteAccount(state, payload: IStudentInfo) {
    const index = state.allStudentInfo.findIndex(
      (s) => s.admissionID === payload.admissionID,
    );
    if (index >= 0) {
      state.allStudentInfo.splice(index, 1);
    }
  },
};

export default mutation;
