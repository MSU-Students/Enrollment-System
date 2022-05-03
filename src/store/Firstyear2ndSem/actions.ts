import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYear2ndSemStateInterface } from './state';
import Firstyear2ndsemService from 'src/services/firstyear2ndsem.service';

const actions: ActionTree<FirstYear2ndSemStateInterface, StateInterface> = {
  async addFirstyear2ndsem(context, payload: any): Promise<any> {
    const result = await Firstyear2ndsemService.create(payload);
    context.commit('setNewFirstyear', result);
    await context.dispatch('getAllFirstyear');
  },
};

export default actions;
