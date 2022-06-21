import { createRouter, createWebHistory } from 'vue-router'

import MainView from "../views/Main.vue"

import SignUp from '../pages/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IMSA Tutoring',
      component: MainView,
      children: [
        {
          path: '/signup',
          name: 'SignUp',
          component: SignUp
        },
        {
          path: '/signin',
          name: 'SignIn',
          component: () => import('../pages/SignIn.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('../pages/PageNotFound.vue')
        },
        {
          path: '/tutors',
          name: 'tutorList',
          component: () => import('../pages/TutorsList.vue')
        },
        {
          path: '/booktutor',
          name: 'booktutor',
          component: () => import('../pages/TutorsDescription.vue')
        },
        {
          path: '/courses',
          name: 'courses',
          component: () => import('../pages/Courses.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../pages/Settings.vue')
        },
        {
          path: '/help',
          name: 'help',
          component: () => import('../pages/HelpPage.vue')
        }
      ]
    }
  ]
})

export default router