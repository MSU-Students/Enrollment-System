import SchoolYearService from 'src/services/schoolyear.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { schoolyearStateInterface } from './state';

const actions: ActionTree<schoolyearStateInterface, StateInterface> = {
  async addSchoolYear(context, payload: any): Promise<any> {
    const result = await SchoolYearService.create(payload);
    context.commit('setnewSchoolYear', result);
    await context.dispatch('getAllSchoolYear');
  },

  async editSchoolYear(context, payload: any): Promise<any> {
    const result = await SchoolYearService.update(payload.id, payload);
    context.commit('updateSchoolYear', result);
    await context.dispatch('getAllSchoolYear');
  },

  async deleteSchoolYear(context, SchoolYear_id: number): Promise<any> {
    const result = await SchoolYearService.delete(SchoolYear_id);
    context.commit('deleteSchoolYear', result);
  },

  async getAllSchoolYear(context): Promise<any> {
    const res = await SchoolYearService.getAll();
    context.commit('getAllSchoolYear', res);
  },

  async getOneSchoolYear(context, SchoolYear_id: number): Promise<any> {
    const res = await SchoolYearService.getOne(SchoolYear_id);
    context.commit('getOneSchoolYear', res);
  },
};

export default actions;
