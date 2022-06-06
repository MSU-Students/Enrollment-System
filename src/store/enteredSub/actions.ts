import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { enteredSub, enteredSubStateInterface } from './state';
import { uid } from 'quasar';

const actions: ActionTree<enteredSubStateInterface, StateInterface> = {
  addEnteredSubs(context, payload: enteredSub) {
    const id = uid();
    context.commit('setenteredSub', { ...payload, enteredSubID: id });
  },

  editEnteredSub(context, payload: enteredSub) {
    context.commit('updateenteredSub', payload);
  },

  deleteEnteredSub(context, payload: enteredSub) {
    context.commit('deleteenteredSub', payload);
  },
  clear(context) {
    context.commit('clear');
  },
};

export default actions;
