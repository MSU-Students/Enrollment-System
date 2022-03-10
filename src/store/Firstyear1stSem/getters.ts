import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { FirstYearStateInterface } from './state';

const getters: GetterTree<FirstYearStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
