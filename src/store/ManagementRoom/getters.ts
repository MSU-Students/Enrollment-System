import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementRoomStateInterface } from './state';

const getters: GetterTree<ManagementRoomStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
