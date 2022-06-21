import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/PageNotFound.vue')
    },
    {
      path: '/tutors',
      name: 'tutorList',
      component: () => import('../views/TutorsList.vue')
    },
    {
      path: '/booktutor',
      name: 'booktutor',
      component: () => import('../views/TutorsDescription.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpPage.vue')
    }
  ]
})

export default router