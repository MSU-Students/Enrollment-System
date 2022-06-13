import { MutationTree } from 'vuex';
import { enteredSub, enteredSubStateInterface } from './state';

const mutation: MutationTree<enteredSubStateInterface> = {
  setenteredSub(state, payload: enteredSub) {
    const exist = state.AllEnteredSub.find(
      (subject) =>
        subject.subjectCode === payload.subjectCode &&
        subject.section === payload.section,
    );
    if (!exist) {
      const res = state.AllEnteredSub.push({
        ...payload,
      });
    }
  },
  updateenteredSub(state, payload) {
    state.AllEnteredSub = payload;
  },
  deleteenteredSub(state, payload) {
    state.AllEnteredSub.push(payload);
  },
};

export default mutation;
