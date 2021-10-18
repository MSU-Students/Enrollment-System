import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Dashboard.vue') },
      { path: 'login', component: () => import('src/pages/Login.vue') },
      { path: 'login2', component: () => import('src/pages/Chairperson/Login2.vue')},
      { path: 'login3', component: () => import('src/pages/Registrar/Login3.vue')},
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: 'Admission',
        component: () => import('src/pages/Admin/Admission.vue'),
      },
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
        component: () => import('src/pages/Chairperson/Assign.vue'),
      },
      {
        path: 'manage',
        component: () => import('src/pages/Chairperson/Manage.vue'),
      },
      
    ],
  },
  {
    path: '/registrar',
    component: () => import('layouts/RegistrarLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('src/pages/Registrar/Dashboard.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
