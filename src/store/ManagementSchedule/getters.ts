import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementScheduleStateInterface } from './state';

const getters: GetterTree<ManagementScheduleStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
