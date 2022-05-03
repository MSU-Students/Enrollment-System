import { MutationTree } from 'vuex';
import { IStudentInfo } from './state';
import { AdmissionStateInterface } from './state';

const mutation: MutationTree<AdmissionStateInterface> = {
  setNewAdmission(state, payload: IStudentInfo) {
    state.NewAdmission = payload;
  },
  updateAdmission(state, payload: IStudentInfo) {
    state.NewAdmission = payload;
  },
  deleteAdmission(state, payload: any) {
    state.allAdmissionInfo.push(payload);
  },

  getAllAdmission(state, payload) {
    state.allAdmissionInfo = [];
    state.allAdmissionInfo.push(...payload);
  },

  getOneAdmission(state, payload) {
    state.allAdmissionInfo = payload;
  },
};

export default mutation;
