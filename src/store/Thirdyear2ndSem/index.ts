import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ThirdYear2ndSemStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<ThirdYear2ndSemStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
