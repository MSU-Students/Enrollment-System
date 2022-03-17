import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementSubjectStateInterface } from './state';

const getters: GetterTree<ManagementSubjectStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
