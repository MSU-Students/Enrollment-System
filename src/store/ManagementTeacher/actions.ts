import { TeacherDto } from './../../services/restapi/api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManagementTeacherStateInterface } from './state';
import teacherService from 'src/services/teacher.service';

const actions: ActionTree<ManagementTeacherStateInterface, StateInterface> = {
  async addTeacher(context, payload: TeacherDto): Promise<void> {
    const result = await teacherService.create(payload);
    context.commit('setNewTeacher', result);
    await context.dispatch('getAllTeacher');
  },

  async editTeacher(context, payload: any): Promise<void> {
    const result = await teacherService.update(payload.teacherID, payload);
    context.commit('updateTeacher', result);
    await context.dispatch('getAllTeacher');
  },

  async deleteTeacher(context, teacherID: number): Promise<any> {
    const result = await teacherService.delete(teacherID);
    context.commit('deleteTeacher', result);
    await context.dispatch('getAllTeacher');
    return result;
  },

  async getAllTeacher(context): Promise<any> {
    const res = await teacherService.getAll();
    context.commit('getAllTeacher', res);
  },

  async getOneTeacher(context, id: number): Promise<any> {
    const res = await teacherService.getOne(id);
    context.commit('getOneTeacher', res);
  },
};

export default actions;
