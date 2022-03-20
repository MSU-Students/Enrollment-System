import admissionService from 'src/services/admission.service';
import { AdmissionDto } from 'src/services/restapi';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AdmissionStateInterface } from './state';

const actions: ActionTree<AdmissionStateInterface, StateInterface> = {
  async addAdmission(context, payload: AdmissionDto): Promise<void> {
    const result = await admissionService.create(payload);
    context.commit('setNewStudent', result);
    await context.dispatch('getAllAdmission');
  },

  async editAdmission(context, payload: any): Promise<any> {
    const result = await admissionService.update(payload.admissionID, payload);
    context.commit('updateStudent', result);
    await context.dispatch('getAllAdmission');
  },

  async deleteAdmission(context, admissionID: number): Promise<any> {
    const result = await admissionService.delete(admissionID);
    context.commit('deleteStudent', result);
  },

  async getAllAdmission(context): Promise<any> {
    const res = await admissionService.getAll();
    context.commit('getAllStudent', res);
  },

  async getOneAdmission(context, id: number): Promise<any> {
    const res = await admissionService.getOne(id);
    context.commit('getOneStudent', res);
  },
};

export default actions;
