import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear2ndSemStateInterface } from './state';

const getters: GetterTree<SecondYear2ndSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
