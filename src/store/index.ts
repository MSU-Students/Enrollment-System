import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

import account from './account';
import { AccountStateInterface } from './account/state';

import FirstYear1stSem from './FirstYear1stSem';
import { FirstYearStateInterface } from './FirstYear1stSem/state';

import FirstYear2ndSem from './FirstYear2ndSem';
import { FirstYear2ndSemStateInterface } from './FirstYear2ndSem/state';

import SecondYear1stSem from './SecondYear1stSem';
import { SecondYear1stSemStateInterface } from './SecondYear1stSem/state';

import SecondYear2ndSem from './SecondYear2ndSem';
import { SecondYear2ndSemStateInterface } from './SecondYear2ndSem/state';


import ThirdYear1stSem from './ThirdYear1stSem';
import { ThirdYear1stSemStateInterface } from './ThirdYear1stSem/state';

import ThirdYear2ndSem from './ThirdYear2ndSem';
import { ThirdYear2ndSemStateInterface } from './ThirdYear2ndSem/state';


import FourYear1stSem from './FourYear1stSem';
import { FourYear1stSemStateInterface } from './FourYear1stSem/state';

import FourYear2ndSem from './FourYear2ndSem';
import { FourYear2ndSemStateInterface } from './FourYear2ndSem/state';



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
  account: AccountStateInterface,
  FirstYear1stSem: FirstYearStateInterface,
  FirstYear2ndSem: FirstYear2ndSemStateInterface,
  SecondYear1stSem: SecondYear1stSemStateInterface,
  SecondYear2ndSem: SecondYear2ndSemStateInterface,
  ThirdYear1stSem: ThirdYear1stSemStateInterface,
  ThirdYear2ndSem: ThirdYear2ndSemStateInterface,
  FourYear1stSem: FourYear1stSemStateInterface,
  FourYear2ndSem: FourYear2ndSemStateInterface,


}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
      account,
      FirstYear1stSem,
      FirstYear2ndSem,
      SecondYear1stSem,
      SecondYear2ndSem,
      ThirdYear1stSem,
      ThirdYear2ndSem,
      FourYear1stSem,
      FourYear2ndSem,

    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}