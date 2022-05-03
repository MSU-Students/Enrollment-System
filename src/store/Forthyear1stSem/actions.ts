import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourthYear1stSemStateInterface } from './state';
import Fourthyear1stsemService from 'src/services/fourthyear1stsem.service';

const actions: ActionTree<FourthYear1stSemStateInterface, StateInterface> = {
  async addFourthyear(context, payload: any): Promise<any> {
    const result = await Fourthyear1stsemService.create(payload);
    context.commit('setNewFourthyear', result);
    await context.dispatch('getAllFourthyear');
  },
};

export default actions;
