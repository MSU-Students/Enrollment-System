import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { enteredSubStateInterface } from './state';

const getters: GetterTree<enteredSubStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
