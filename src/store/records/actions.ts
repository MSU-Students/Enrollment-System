import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { recordsStateInterface } from './state';
import CourseService from 'src/services/course.service';

const actions: ActionTree<recordsStateInterface, StateInterface> = {
  async addCourses(context, payload: any): Promise<any> {
    const result = await CourseService.create(payload);
    context.commit('setCourse', result);
    await context.dispatch('getAllCourse');
  },

  async editCourse(context, payload: any): Promise<void> {
    const result = await CourseService.update(payload.Courseid, payload);
    context.commit('updateCourse', result);
    await context.dispatch('getAllCourse');
  },

  async deleteCourse(context, CourseID: number): Promise<any> {
    const result = await CourseService.delete(CourseID);
    context.commit('deleteCourse', result);
  },

  async getAllCourse(context): Promise<any> {
    const res = await CourseService.getAll();
    context.commit('getAllCourse', res);
  },

  async getOneCourse(context, CourseID: number): Promise<any> {
    const res = await CourseService.getOne(CourseID);
    context.commit('getOneCourse', res);
  },
};

export default actions;
