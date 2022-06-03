import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { SchedulingStateInterface } from './state';
import scheduleService from 'src/services/scheduling.service';

const actions: ActionTree<SchedulingStateInterface, StateInterface> = {
  async addschedule(context, payload: any): Promise<any> {
    const result = await scheduleService.create(payload);
    context.commit('setschedule', result);
    await context.dispatch('getAllschedule');
  },

  async editschedule(context, payload: any): Promise<void> {
    const result = await scheduleService.update(payload.scheduleid, payload);
    context.commit('updateschedule', result);
    await context.dispatch('getAllschedule');
  },

  async deleteschedule(context, scheduleID: number): Promise<any> {
    const result = await scheduleService.delete(scheduleID);
    context.commit('deleteschedule', result);
  },

  async getAllschedule(context): Promise<any> {
    const res = await scheduleService.getAll();
    context.commit('getAllschedule', res);
    // await this.dispatch('section/getAllsection');
  },

  async getOneschedule(context, scheduleID: number): Promise<any> {
    const res = await scheduleService.getOne(scheduleID);
    context.commit('getOneschedule', res);
  },
};

export default actions;
