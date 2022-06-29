import { MutationTree } from 'vuex';
import { enteredSub, enteredSubStateInterface } from './state';

const mutation: MutationTree<enteredSubStateInterface> = {
  setenteredSub(state, payload: enteredSub) {
    const exist = state.AllEnteredSub.find(
      (subject) =>
        subject.enteredsubjectCode === payload.enteredsubjectCode &&
        subject.entereddescriptiveTitle === payload.entereddescriptiveTitle &&
        subject.enteredsection === payload.enteredsection,
    );
    console.log(exist);
    if (!exist) {
      const res = state.AllEnteredSub.push(payload);
    }
    if (exist) {
      return 'youasd';
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
