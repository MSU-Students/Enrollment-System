import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { courseStateInterface } from './state';

const getters: GetterTree<courseStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
