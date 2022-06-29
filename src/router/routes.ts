import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/Login.vue') }],
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
      {
        path: 'course',
        component: () => import('src/pages/Admin/course.vue'),
      },
    ],
  },
  {
    path: '/chairperson',
    component: () => import('layouts/ChairpersonLayout.vue'),
    children: [
      {
        path: 'teacher',
        component: () => import('src/pages/Chairperson/Teacher.vue'),
      },
      {
        path: 'subject',
        component: () => import('src/pages/Chairperson/Subject.vue'),
      },

      {
        path: 'section',
        component: () => import('src/pages/Chairperson/section.vue'),
      },

      {
        path: 'room',
        component: () => import('src/pages/Chairperson/room.vue'),
      },

      {
        path: 'scheduling',
        component: () => import('src/pages/Chairperson/scheduling.vue'),
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
        path: 'records&result',
        component: () => import('src/pages/Registrar/Records&Result.vue'),
      },
      {
        path: 'studentrecords',
        component: () => import('src/pages/Registrar/studentRecord.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
