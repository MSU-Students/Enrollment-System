import { ScheduleDto } from 'src/services/restapi';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementScheduleStateInterface } from './state';
import ScheduleService from 'src/services/subject.service';

const actions: ActionTree<ManagementScheduleStateInterface, StateInterface> = {
  async addSchedule(context, payload: ScheduleDto): Promise<void> {
    const result = await ScheduleService.create(payload);
    context.commit('setNewSchedule', result);
    await context.dispatch('getAllSchedules');
  },

  async editSchedule(context, payload: any): Promise<void> {
    const result = await ScheduleService.update(payload.ScheduleID, payload);
    context.commit('updateSchedule', result);
    await context.dispatch('getAllSchedules');
  },

  async deleteSchedule(context, ScheduleID: number): Promise<any> {
    const result = await ScheduleService.delete(ScheduleID);
    context.commit('deleteSchedule', result);
  },

  async getAllSchedules(context): Promise<any> {
    const res = await ScheduleService.getAll();
    context.commit('getAllSchedules', res);
  },

  async getOneSchedule(context, ScheduleID: number): Promise<any> {
    const res = await ScheduleService.getOne(ScheduleID);
    context.commit('getOneSchedule', res);
  },
};

export default actions;
