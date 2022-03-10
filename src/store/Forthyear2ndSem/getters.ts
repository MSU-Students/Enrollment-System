import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FourYear2ndSemStateInterface } from './state';

const getters: GetterTree<FourYear2ndSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
