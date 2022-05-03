import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FourthYear1stSemStateInterface } from './state';

const getters: GetterTree<FourthYear1stSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
