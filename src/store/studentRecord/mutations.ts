import { MutationTree } from 'vuex';
import { studentRecord, studentRecordStateInterface } from './state';

const mutation: MutationTree<studentRecordStateInterface> = {
  setstudentRecord(state, payload: studentRecord) {
    state.newstudentRecord = payload;
  },
  updatestudentRecord(state, payload: studentRecord) {
    state.newstudentRecord = payload;
  },
  deletestudentRecord(state, payload: any) {
    state.AllstudentRecord.push(payload);
  },

  getAllstudentRecord(state, payload) {
    state.AllstudentRecord = [];
    state.AllstudentRecord.push(...payload);
  },

  getOnestudentRecord(state, payload) {
    state.AllstudentRecord = payload;
  },
};

export default mutation;
