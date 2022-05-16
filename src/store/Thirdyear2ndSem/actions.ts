import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear2ndSemStateInterface } from './state';
import Thirdyear2ndsemService from 'src/services/thirdyear2ndsem.service';

const actions: ActionTree<ThirdYear2ndSemStateInterface, StateInterface> = {
  async addThirdyear2ndsem(context, payload: any): Promise<any> {
    const result = await Thirdyear2ndsemService.create(payload);
    context.commit('setnewThirdYear2ndSem', result);
    await context.dispatch('getAllThirdyear2ndsem');
  },
  async getAllThirdyear2ndsem(context): Promise<any> {
    const res = await Thirdyear2ndsemService.getAll();
    context.commit('getAllThirdyear2ndsem', res);
  },
};

export default actions;
