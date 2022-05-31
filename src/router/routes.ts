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
        path: 'schoolyear',
        component: () => import('src/pages/Admin/schoolyear.vue'),
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
        path: 'room',
        component: () => import('src/pages/Chairperson/Room.vue'),
      },
      {
        path: 'firstyear',
        component: () => import('src/pages/Chairperson/firstyear.vue'),
      },
      {
        path: 'course',
        component: () => import('src/pages/Chairperson/course.vue'),
      },
      {
        path: 'section',
        component: () => import('src/pages/Chairperson/section.vue'),
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
        path: 'cancellation',
        component: () => import('src/pages/Registrar/Cancellation.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
