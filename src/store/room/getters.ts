import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { roomStateInterface } from './state';

const getters: GetterTree<roomStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
