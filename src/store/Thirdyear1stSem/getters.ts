import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ThirdYear1stSemStateInterface } from './state';

const getters: GetterTree<ThirdYear1stSemStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
