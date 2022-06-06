import { enteredSubStateInterface } from './enteredSub/state';
import { EnrollmentStateInterface } from './enrollment/state';
import { SchedulingStateInterface } from './scheduling/state';
import { sectionStateInterface } from './section/state';
import section from './section';
import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import account from './account';
import { AccountStateInterface } from './account/state';

import ManagementSubject from './ManagementSubject';
import { ManagementSubjectStateInterface } from './ManagementSubject/state';

import ManagementTeacher from './ManagementTeacher';
import { ManagementTeacherStateInterface } from './ManagementTeacher/state';

import Admission from './Admission';
import { AdmissionStateInterface } from './Admission/state';
import schoolyear from './schoolyear';
import { schoolyearStateInterface } from './schoolyear/state';

import auth from './auth';
import { IAuthState } from './auth/state';

import { courseStateInterface } from './course/state';
import course from './course';
import scheduling from './scheduling';
import enrollment from './enrollment';
import enteredSub from './enteredSub';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  account: AccountStateInterface;
  ManagementSubject: ManagementSubjectStateInterface;
  ManagementTeacher: ManagementTeacherStateInterface;
  admission: AdmissionStateInterface;
  schoolyear: schoolyearStateInterface;
  course: courseStateInterface;
  section: sectionStateInterface;
  scheduling: SchedulingStateInterface;
  enrollment: EnrollmentStateInterface;
  auth: IAuthState;
  enteredSub: enteredSubStateInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
      account,
      Admission,
      ManagementSubject,
      ManagementTeacher,
      schoolyear,
      course,
      section,
      scheduling,
      enrollment,
      auth,
      enteredSub,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
