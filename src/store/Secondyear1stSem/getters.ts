import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { SecondYear1stSemStateInterface } from './state';

const getters: GetterTree<SecondYear1stSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
