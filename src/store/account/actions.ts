import userService from 'src/services/user.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  async addAccount(context, payload: any): Promise<any> {
    const result = await userService.create(payload);
    context.commit('setNewAccount', result);
    await context.dispatch('getAllAccount');
  },

  async editAccount(context, payload: any): Promise<any> {
    const result = await userService.update(payload.id, payload);
    context.commit('updateAccount', result);
    await context.dispatch('getAllAccount');
  },

  async deleteAccount(context, id: number): Promise<any> {
    const result = await userService.delete(id);
    context.commit('deleteAccount', result);
  },

  async getAllAccount(context): Promise<any> {
    const res = await userService.getAll();
    context.commit('getAllUser', res);
  },

  async getOneAccount(context, id: number): Promise<any> {
    const res = await userService.getOne(id);
    context.commit('getOneUser', res);
  },

  async getProfile(context): Promise<any> {
    const res = await userService.getUserProfile();
    context.commit('getProfile', res);
    return res;
  },
};

export default actions;
