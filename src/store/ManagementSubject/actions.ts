import { SubjectDto } from 'src/services/restapi';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementSubjectStateInterface } from './state';
import subjectService from 'src/services/subject.service';

const actions: ActionTree<ManagementSubjectStateInterface, StateInterface> = {
  async addSubjects(context, payload: SubjectDto): Promise<void> {
    const result = await subjectService.create(payload);
    context.commit('setSubject', result);
    await context.dispatch('getAllSubjects');
  },

  async editSubject(context, payload: any): Promise<void> {
    const result = await subjectService.update(payload.SubjectID, payload);
    context.commit('updateSubject', result);
    await context.dispatch('getAllSubjects');
  },

  async deleteSubject(context, subjectID: number): Promise<any> {
    const result = await subjectService.delete(subjectID);
    context.commit('deleteSubject', result);
    await context.dispatch('getAllSubjects');
    return result;
  },

  async getAllSubjects(context): Promise<any> {
    const res = await subjectService.getAll();
    context.commit('getAllSubjects', res);
  },

  async getOneSubject(context, subjectID: number): Promise<any> {
    const res = await subjectService.getOne(subjectID);
    context.commit('getOneSubject', res);
  },
};

export default actions;
