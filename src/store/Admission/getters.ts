import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AdmissionStateInterface } from './state';

const getters: GetterTree<AdmissionStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
