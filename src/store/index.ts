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

import ManagementRoom from './ManagementRoom';
import { ManagementRoomStateInterface } from './ManagementRoom/state';

import ManagementSchedule from './ManagementSchedule';
import { ManagementScheduleStateInterface } from './ManagementSchedule/state';

import Admission from './Admission';
import { AdmissionStateInterface } from './Admission/state';

import Firstyear1stSem from './Firstyear1stSem';
import { FirstYearStateInterface } from './Firstyear1stSem/state';

import Firstyear2ndSem from './Firstyear2ndSem';
import { FirstYear2ndSemStateInterface } from './Firstyear2ndSem/state';

import Secondyear1stSem from './Secondyear1stSem';
import { SecondYear1stSemStateInterface } from './Secondyear1stSem/state';

import Secondyear2ndSem from './Secondyear2ndSem';
import { SecondYear2ndSemStateInterface } from './Secondyear2ndSem/state';

import Thirdyear1stSem from './Thirdyear1stSem';
import { ThirdYear1stSemStateInterface } from './Thirdyear1stSem/state';

import Thirdyear2ndSem from './Thirdyear2ndSem';
import { ThirdYear2ndSemStateInterface } from './Thirdyear2ndSem/state';

import Forthyear1stSem from './Forthyear1stSem';
import { FourYear1stSemStateInterface } from './Forthyear1stSem/state';

import Forthyear2ndSem from './Forthyear2ndSem';
import { FourYear2ndSemStateInterface } from './Forthyear2ndSem/state';

import auth from './auth';
import { IAuthState } from './auth/state';

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
  ManagementRoom: ManagementRoomStateInterface;
  ManagementSchedule: ManagementScheduleStateInterface;
  admission: AdmissionStateInterface;
  Firstyear1stSem: FirstYearStateInterface;
  Firstyear2ndSem: FirstYear2ndSemStateInterface;
  Secondyear1stSem: SecondYear1stSemStateInterface;
  Secondyear2ndSem: SecondYear2ndSemStateInterface;
  Thirdyear1stSem: ThirdYear1stSemStateInterface;
  Thirdyear2ndSem: ThirdYear2ndSemStateInterface;
  Forthyear1stSem: FourYear1stSemStateInterface;
  Forthyear2ndstSem: FourYear2ndSemStateInterface;
  auth: IAuthState;
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
      ManagementRoom,
      ManagementSchedule,
      Firstyear1stSem,
      Firstyear2ndSem,
      Secondyear1stSem,
      Secondyear2ndSem,
      Thirdyear1stSem,
      Thirdyear2ndSem,
      Forthyear1stSem,
      Forthyear2ndSem,
      auth,
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
