import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourthYear2ndSemStateInterface } from './state';
import Fourthyear2ndsemService from 'src/services/fourthyear1stsem.service';

const actions: ActionTree<FourthYear2ndSemStateInterface, StateInterface> = {
  async addFourthyear2ndsem(context, payload: any): Promise<any> {
    const result = await Fourthyear2ndsemService.create(payload);
    context.commit('setNewFourYear1stSem', result);
    await context.dispatch('getAllFourthyear2ndsem');
  },
  async getAllFourthyear2ndsem(context): Promise<any> {
    const res = await Fourthyear2ndsemService.getAll();
    context.commit('getAllFourthyear2ndsem', res);
  },
};

export default actions;
