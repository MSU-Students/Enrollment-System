import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { studentRecordStateInterface } from './state';

const getters: GetterTree<studentRecordStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
