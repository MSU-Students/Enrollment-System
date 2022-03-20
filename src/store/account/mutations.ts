import { MutationTree } from 'vuex';
import { AccountStateInterface } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  setAccount(state, payload) {
    state.newAccount = payload;
  },
  updateAccount(state, payload) {
    state.allAccountUser.push(payload);
  },
  deleteAccount(state, payload) {
    state.allAccountUser.push(payload);
  },

  getAllUser(state, payload) {
    state.allAccountUser = [];
    state.allAccountUser.push(...payload);
  },

  getOneUser(state, payload) {
    state.allAccountUser = payload;
  },

  getProfile(state, payload) {
    state.allAccountUser = payload;
  },
};
export default mutation;
