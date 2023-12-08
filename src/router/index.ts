import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home', // Redirige a la vista principal por defecto
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Superhéroes', // Puedes agregar metadatos como el título
    },
  },
  {
    path: '/hero-list',
    component: () => import('../components/HeroList.vue'),
    meta: {
      title: 'Detalles del Superhéroe',
    },
  },
  {
    path: '/hero-details/:id',
    component: () => import('../views/HeroDetailsView.vue'),
    meta: {
      title: 'Detalles del Superhéroe',
    },
  },
  {
    path: '/battle',
    name: 'battle',
    component: () => import('../views/BattleView.vue'),
    meta: {
      title: 'Batalla de Superhéroes',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
