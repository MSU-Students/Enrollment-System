import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear2ndSemStateInterface } from './state';
import Thirdyear2ndsemService from 'src/services/thirdyear2ndsem.service';

const actions: ActionTree<ThirdYear2ndSemStateInterface, StateInterface> = {
  async addThirdyear(context, payload: any): Promise<any> {
    const result = await Thirdyear2ndsemService.create(payload);
    context.commit('setNewThirdyear', result);
    await context.dispatch('getAllThirdyear');
  },
};

export default actions;
