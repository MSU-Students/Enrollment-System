import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { sectionStateInterface } from './state';
import SectionService from 'src/services/section.service';

const actions: ActionTree<sectionStateInterface, StateInterface> = {
  async addsections(context, payload: any): Promise<any> {
    const result = await SectionService.create(payload);
    context.commit('setsection', result);
    await context.dispatch('getAllsection');
  },

  async editsection(context, payload: any): Promise<void> {
    const result = await SectionService.update(payload.sectionid, payload);
    context.commit('updatesection', result);
    await context.dispatch('getAllsection');
  },

  async deletesection(context, sectionID: number): Promise<any> {
    const result = await SectionService.delete(sectionID);
    context.commit('deletesection', result);
  },

  async getAllsection(context): Promise<any> {
    const res = await SectionService.getAll();
    context.commit('getAllsection', res);
    // await this.dispatch('scheduling/getAllschedule');
  },

  async getOnesection(context, sectionID: number): Promise<any> {
    const res = await SectionService.getOne(sectionID);
    context.commit('getOnesection', res);
  },
};

export default actions;
