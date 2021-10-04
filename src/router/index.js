//import { createRouter, createWebHistory } from 'vue-router';
import Login from '/src/components/Login.vue';
const routes = [
  {
    path: '/mf-backoffice-root/login',
    name: 'Login',
    component: Login,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
export default router;
