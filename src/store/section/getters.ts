import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { sectionStateInterface } from './state';

const getters: GetterTree<sectionStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
