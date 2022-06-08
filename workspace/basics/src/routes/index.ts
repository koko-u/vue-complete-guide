import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import BasicsPage from '../pages/BasicsPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import StylesPage from '../pages/StylesPage.vue'
import ConditionPage from '../pages/ConditionPage.vue'

const routes: RouteRecordRaw[] = [
  { path: '/basics', component: BasicsPage },
  { path: '/events', component: EventsPage },
  { path: '/styles', component: StylesPage },
  { path: '/condition', component: ConditionPage },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
