import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYearStateInterface } from './state';
import Firstyear1stsemService from 'src/services/firstyear1stsem.service';

const actions: ActionTree<FirstYearStateInterface, StateInterface> = {
  async add1stSubjectfor1styear(context, payload: any): Promise<any> {
    const result = await Firstyear1stsemService.create(payload);
    context.commit('setFirstYear', result);
    await context.dispatch('getAllFirstyear');
  },
  async getAllFirstyear(context): Promise<any> {
    const res = await Firstyear1stsemService.getAll();
    context.commit('getAllFirstyear', res);
  },
};

export default actions;
