import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { EnrollmentStateInterface } from './state';

const getters: GetterTree<EnrollmentStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
