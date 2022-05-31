import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { schoolyearStateInterface } from './state';

const getters: GetterTree<schoolyearStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
