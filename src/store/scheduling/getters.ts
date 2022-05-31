import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SchedulingStateInterface } from './state';

const getters: GetterTree<SchedulingStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
