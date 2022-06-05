import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BasicsPage from '../pages/BasicsPage.vue'
import EventsPage from '../pages/EventsPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/basics', component: BasicsPage },
  { path: '/events', component: EventsPage },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
