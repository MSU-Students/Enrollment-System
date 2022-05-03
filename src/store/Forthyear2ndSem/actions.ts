import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourthYear2ndSemStateInterface } from './state';
import Fourthyear2ndsemService from 'src/services/fourthyear1stsem.service';

const actions: ActionTree<FourthYear2ndSemStateInterface, StateInterface> = {
  async addFourthyear(context, payload: any): Promise<any> {
    const result = await Fourthyear2ndsemService.create(payload);
    context.commit('setNewFourthyear', result);
    await context.dispatch('getAllFourthyear');
  },
};

export default actions;
