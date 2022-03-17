import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Dashboard.vue') },
      { path: 'login', component: () => import('src/pages/Login.vue') },
      {
        path: 'login2',
        component: () => import('src/pages/Chairperson/Login2.vue'),
      },
      {
        path: 'login3',
        component: () => import('src/pages/Registrar/Login3.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('src/pages/Admin/Dashboard.vue'),
      },
      {
        path: 'ManageAccount',
        component: () => import('src/pages/Admin/Manage Account.vue'),
      },
    ],
  },
  {
    path: '/chairperson',
    component: () => import('layouts/ChairpersonLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('src/pages/Chairperson/Dashboard.vue'),
      },
      {
        path: 'assign',
        component: () => import('src/pages/Chairperson/Assigning.vue'),
      },
      {
        path: 'teacher',
        component: () => import('src/pages/Chairperson/Teacher.vue'),
      },
      {
        path: 'subject',
        component: () => import('src/pages/Chairperson/Subject.vue'),
      },
      {
        path: 'room',
        component: () => import('src/pages/Chairperson/Room.vue'),
      },
      {
        path: 'schedule',
        component: () => import('src/pages/Chairperson/Schedule.vue'),
      },
      {
        path: 'firstyear',
        component: () => import('src/pages/Chairperson/firstyear.vue'),
      },
      {
        path: 'secondyear',
        component: () => import('src/pages/Chairperson/secondyear.vue'),
      },
      {
        path: 'thirdyear',
        component: () => import('src/pages/Chairperson/thirdyear.vue'),
      },

      {
        path: 'forthyear',
        component: () => import('src/pages/Chairperson/forthyear.vue'),
      },
    ],
  },
  {
    path: '/registrar',
    component: () => import('layouts/RegistrarLayout.vue'),
    children: [
      {
        path: 'enrollment',
        component: () => import('src/pages/Registrar/Enrollment.vue'),
      },
      {
        path: 'cancellation',
        component: () => import('src/pages/Registrar/Cancellation.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
