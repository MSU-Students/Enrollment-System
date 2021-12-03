import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface, AccountInfo } from './state';

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  newAccount (context, newAccount: AccountInfo) {
    context.commit ('addAccount', newAccount);
  },
  editAccount (context, updateAccount: AccountInfo) {
    context.commit ('updateAccount', updateAccount);
  },
  deleteAccount (context, targetAccount: AccountInfo) {
    context.commit ('removeAccount', targetAccount);
  }
};

export default actions;
