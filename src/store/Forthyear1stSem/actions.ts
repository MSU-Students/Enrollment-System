import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FourthYear1stSemStateInterface } from './state';
import Fourthyear1stsemService from 'src/services/fourthyear1stsem.service';

const actions: ActionTree<FourthYear1stSemStateInterface, StateInterface> = {
  async addFourthyear(context, payload: any): Promise<any> {
    const result = await Fourthyear1stsemService.create(payload);
    context.commit('setNewFourthYear1stSem', result);
    await context.dispatch('getAllFourthYear1stsem');
  },
  async getAllFourthYear1stsem(context): Promise<any> {
    const res = await Fourthyear1stsemService.getAll();
    context.commit('getAllFourthYear1stsem', res);
  },
};

export default actions;
