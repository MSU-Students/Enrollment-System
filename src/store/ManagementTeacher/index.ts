import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ManagementTeacherStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<ManagementTeacherStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
