// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home/Home.vue")
  },
  {
    path: '/cadastro/:cartaoId',
    name: '/cadastro',
    component: () => import("../views/Cadastro/Cadastro.vue")
  },
  {
    path: '/movimentacao',
    name: '/movimentacao',
    component: () => import("../views/Movimentacao/Movimentacao.vue")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
