import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EnrollmentStateInterface } from './state';
import enrollmentService from 'src/services/enrollment.service';

const actions: ActionTree<EnrollmentStateInterface, StateInterface> = {
  async addEnrollment(context, payload: any): Promise<any> {
    const result = await enrollmentService.create(payload);
    context.commit('setenrollment', result);
    await context.dispatch('getAllEnrollment');
  },

  async editEnrollment(context, payload: any): Promise<void> {
    const result = await enrollmentService.update(
      payload.enrollmentid,
      payload,
    );
    context.commit('updateenrollment', result);
    await context.dispatch('getAllEnrollment');
  },

  async deleteEnrollment(context, enrollmentID: number): Promise<any> {
    const result = await enrollmentService.delete(enrollmentID);
    context.commit('deleteenrollment', result);
  },

  async getAllEnrollment(context): Promise<any> {
    const res = await enrollmentService.getAll();
    context.commit('getAllEnrollment', res);
  },

  async getOneEnrollment(context, enrollmentID: number): Promise<any> {
    const res = await enrollmentService.getOne(enrollmentID);
    context.commit('getOneenrollment', res);
  },
};

export default actions;
