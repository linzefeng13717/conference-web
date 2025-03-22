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
      path: '/steering-committee',
      name: 'SteeringCommittee',
      component: () => import('@/views/SteeringCommittee.vue')
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
        },
      ]
    },
    {
      path: '/contribute',
      children: [
        {
          path: 'call-for-papers',
          name: 'CallForPapers',
          component: () => import('@/views/contribute/CallForPaper.vue')
        },
        {
          path: 'submission-guidelines',
          name: 'SubmissionGuidelines',
          component: () => import('@/views/contribute/Submission.vue')
        },
        {
          path: 'accepted-papers',
          name: 'AcceptedPapers',
          component: () => import('@/views/contribute/AcceptedPapers.vue')
        },
        {
          path: 'camera-ready',
          name: 'CameraReady',
          component: () => import('@/views/contribute/CameraReady.vue')
        }
      ]
    },
    {
      path: '/parallel-events',
      children: [
        {
          path: 'workshop-tutorial',
          name: 'WorkshopTutorial',
          component: () => import('@/views/parallel-events/WorkshopTutorial.vue')
        },
        {
          path: 'tech-forum',
          name: 'TechForum',
          component: () => import('@/views/parallel-events/TechForum.vue')
        },
        {
          path: 'phd-forum',
          name: 'PhDForum',
          component: () => import('@/views/parallel-events/PhDForum.vue')
        },
        {
          path: 'competition',
          name: 'StudentCompetition',
          component: () => import('@/views/parallel-events/Competition.vue')
        },
        {
          path: 'posters-demo',
          name: 'PostersDemo',
          component: () => import('@/views/parallel-events/PostersDemo.vue')
        }
      ]
    },
    {
      path: '/keynote',
      name: 'Keynote',
      component: () => import('@/views/Keynote.vue')
    },
    {
      path: '/program',
      name: 'Program',
      component: () => import('@/views/Program.vue')
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: () => import('@/views/Sponsor.vue')
    },
    {
      path: '/attend',
      children: [
        {
          path: 'venue-hotel',
          name: 'VenueHotel',
          component: () => import('@/views/attend/VenueHotel.vue')
        },
        {
          path: 'registration',
          name: 'Registration',
          component: () => import('@/views/attend/Registration.vue')
        },
        {
          path: 'visa-info',
          name: 'VisaInfo',
          component: () => import('@/views/attend/VisaInfo.vue')
        },
        {
          path: 'travel-grant',
          name: 'TravelGrant',
          component: () => import('@/views/attend/TravelGrant.vue')
        }
      ]
    },
    {
      path: '/history',
      name: 'APPTHistory',
      component: () => import('@/views/History.vue')
    }
  ]
})

export default router 