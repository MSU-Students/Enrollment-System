import { MutationTree } from 'vuex';
import { IStudentInfo } from './state';
import { AdmissionStateInterface } from './state';

const mutation: MutationTree<AdmissionStateInterface> = {
  setNewStudent(state, payload: IStudentInfo) {
    state.NewStudent = payload;
  },
  updateStudent(state, payload: IStudentInfo) {
    state.NewStudent = payload;
  },
  deleteStudent(state, payload: any) {
    state.allStudentInfo.push(payload);
  },

  getAllStudent(state, payload) {
    state.allStudentInfo = [];
    state.allStudentInfo.push(...payload);
  },

  getOneStudent(state, payload) {
    state.allStudentInfo = payload;
  },
};

export default mutation;
