import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYear2ndSemStateInterface } from './state';
import Firstyear2ndsemService from 'src/services/firstyear2ndsem.service';

const actions: ActionTree<FirstYear2ndSemStateInterface, StateInterface> = {
  async addFirstyear2ndsem(context, payload: any): Promise<any> {
    const result = await Firstyear2ndsemService.create(payload);
    context.commit('setFirstYear2ndSem', result);
    await context.dispatch('getallFirstYear2ndSem');
  },
  async getAllFirstyear2ndsem(context): Promise<any> {
    const res = await Firstyear2ndsemService.getAll();
    context.commit('getallFirstYear2ndSem', res);
  },
};

export default actions;
