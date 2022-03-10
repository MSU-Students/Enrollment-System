import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYear2ndSemStateInterface } from './state';

const getters: GetterTree<FirstYear2ndSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
