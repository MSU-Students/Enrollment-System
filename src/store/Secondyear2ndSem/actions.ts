import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear2ndSemStateInterface } from './state';
import Secondyear2ndsemService from 'src/services/secondyear2ndsem.service';

const actions: ActionTree<SecondYear2ndSemStateInterface, StateInterface> = {
  async addSecondyear2ndsem(context, payload: any): Promise<any> {
    const result = await Secondyear2ndsemService.create(payload);
    context.commit('setNewFirstyear', result);
    await context.dispatch('getAllFirstyear');
  },
};

export default actions;
