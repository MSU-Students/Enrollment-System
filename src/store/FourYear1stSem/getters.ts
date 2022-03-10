import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FourYear1stSemStateInterface } from './state';

const getters: GetterTree<FourYear1stSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
