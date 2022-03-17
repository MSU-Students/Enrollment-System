import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementTeacherStateInterface } from './state';

const getters: GetterTree<ManagementTeacherStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
