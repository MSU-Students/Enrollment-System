import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear1stSemStateInterface } from './state';
import Thirdyear1stsemService from 'src/services/thirdyear1stsem.service';

const actions: ActionTree<ThirdYear1stSemStateInterface, StateInterface> = {
  async addThirdyear(context, payload: any): Promise<any> {
    const result = await Thirdyear1stsemService.create(payload);
    context.commit('setThirdYear1stSem', result);
    await context.dispatch('getAllThirdyear1stsem');
  },
  async getAllThirdyear1stsem(context): Promise<any> {
    const res = await Thirdyear1stsemService.getAll();
    context.commit('getAllThirdyear1stsem', res);
  },
};

export default actions;
