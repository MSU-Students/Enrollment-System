import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { SecondYear1stSemStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<SecondYear1stSemStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
