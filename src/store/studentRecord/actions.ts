import { enteredSub } from './../enteredSub/state';
import studentRecordService from 'src/services/studentRecord.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { studentRecordStateInterface } from './state';

const actions: ActionTree<studentRecordStateInterface, StateInterface> = {
  async addstudentRecord(context, payload: any): Promise<any> {
    const result = await studentRecordService.create(payload);
    context.commit('setstudentRecord', result);
    await context.dispatch('getAllstudentRecord');

    const listStudents = context.rootState.enteredSub.AllEnteredSub;
    if (listStudents.length > 0 && result) {
      listStudents.map(
        async (s) =>
          await context.dispatch(
            'enrollment/addEnrollment',
            { ...s, cor: result.StudentRecordID },
            { root: true },
          ),
      );
    }
    return result;
    // const Subject = context.rootState.enteredSub.AllEnteredSub;
    // if (listStudents.length > 0 && result) {
    //   listStudents.map(
    //     async (b) =>
    //     await context.dispatch(
    //       'scheduling/'
    //     )
    //   )
    // }
  },

  async editstudentRecord(context, payload: any): Promise<void> {
    const result = await studentRecordService.update(
      payload.studentRecordid,
      payload,
    );
    context.commit('updatestudentRecord', result);
    await context.dispatch('getAllstudentRecord');
  },

  async deletestudentRecord(context, studentRecordID: number): Promise<any> {
    const result = await studentRecordService.delete(studentRecordID);
    context.commit('deletestudentRecord', result);
  },

  async getAllstudentRecord(context): Promise<any> {
    const res = await studentRecordService.getAll();
    context.commit('getAllstudentRecord', res);
    await this.dispatch('enrollment/getAllEnrollment');
  },

  async getOnestudentRecord(context, studentRecordID: number): Promise<any> {
    const res = await studentRecordService.getOne(studentRecordID);
    context.commit('getOnestudentRecord', res);
  },
};

export default actions;
