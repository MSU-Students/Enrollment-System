import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear1stSemStateInterface } from './state';
import Secondyear1stsemService from 'src/services/secondyear1stsem.service';

const actions: ActionTree<SecondYear1stSemStateInterface, StateInterface> = {
  async addSecondyear(context, payload: any): Promise<any> {
    const result = await Secondyear1stsemService.create(payload);
    context.commit('setNewSecondyear', result);
    await context.dispatch('getAllSecondyear');
  },
};

export default actions;
