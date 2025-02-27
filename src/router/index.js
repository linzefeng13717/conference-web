import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/contribute',
      children: [
        {
          path: 'call-for-paper',
          name: 'CallForPaper',
          component: () => import('@/views/contribute/CallForPaper.vue')
        },
        {
          path: 'submission',
          name: 'Submission',
          component: () => import('@/views/contribute/Submission.vue')
        }
      ]
    },
    {
      path: '/organization',
      children: [
        {
          path: 'committee',
          name: 'OrganizationCommittee',
          component: () => import('@/views/organization/OrganizationCommittee.vue')
        },
        {
          path: 'program-committee',
          name: 'ProgramCommittee',
          component: () => import('@/views/organization/ProgramCommittee.vue')
        }
      ]
    },
    {
      path: '/speaker',
      name: 'Speaker',
      component: () => import('@/views/Speaker.vue')
    },
    {
      path: '/competition',
      name: 'Competition',
      component: () => import('@/views/Competition.vue')
    },
    {
      path: '/program',
      children: [
        {
          path: 'forums',
          name: 'Forums',
          component: () => import('@/views/program/Forums.vue')
        },
        {
          path: 'papers',
          name: 'AcceptedPapers',
          component: () => import('@/views/program/AcceptedPapers.vue')
        }
      ]
    },
    {
      path: '/registration',
      component: () => import('@/views/registration/RegistrationLayout.vue'),
      redirect: '/registration/guidelines',
      children: [
        {
          path: 'venue',
          name: 'Venue',
          component: () => import('@/views/registration/Venue.vue')
        },
        {
          path: 'guidelines',
          name: 'Guidelines',
          component: () => import('@/views/registration/Guidelines.vue')
        }
      ]
    }
  ]
})

export default router 