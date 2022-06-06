import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { recordsStateInterface } from './state';

const getters: GetterTree<recordsStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
