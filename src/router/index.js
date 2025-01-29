import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupHospitalView from '../views/SignupHospitalView.vue'
import SignupPatientView from '../views/SignupPatientView.vue'
import SigninHospitalView from '../views/SigninHospitalView.vue'
import SigninPatientView from '../views/SigninPatientView.vue'
import TypeUserChoices from '../views/SignupChoicesView.vue'

// import header from '../components/header/HeaderWithoutAuth.vue'
import LayaoutBeforeAuthVue from '@/components/layaouts/LayaoutBeforeAuth.vue'
import LayaoutForAllUser from '@/components/layaouts/LayaoutForAllUser.vue'

import PatientDashboardView from '@/views/PatientDashboardView.vue'
import DoctorDashboardView from '@/views/DoctorDashboardView.vue'
import HospitalDashboard from '@/views/HospitalDashboard.vue'
import MeetingList from '@/views/MeetingList.vue'
import AddMeeting from '@/views/AddMeeting.vue'
import AddPatient from '@/views/AddPatient.vue'
import PatientList from '@/views/PatientList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: LayaoutForAllUser, public: true }
    },
    {
      path: '/signup',
      name: 'typeuserchoices',
      component: TypeUserChoices,
      meta: { layout: LayaoutBeforeAuthVue, public: false }
    },
    {
      path: '/signupHopital',
      name: 'signuphopital',
      component: SignupHospitalView,
      meta: { layout: LayaoutBeforeAuthVue, public: false }
    },
    {
      path: '/signupPatient',
      name: 'signuppatient',
      component: SignupPatientView,
      meta: { layout: LayaoutBeforeAuthVue, public: false }
    },
    {
      path: '/signinPatient',
      name: 'signinpatient',
      component: SigninPatientView,
      meta: { layout: LayaoutBeforeAuthVue, public: false }
    },
    {
      path: '/signinHospital',
      name: 'signinhospital',
      component: SigninHospitalView,
      meta: { layout: LayaoutBeforeAuthVue, public: false }
    },
     {
      path: '/patients-dashboard',
      name: 'patients-dashboard',
      component: PatientDashboardView,
      meta: { 
        title: 'Patients-Dashboard',
        layout: LayaoutForAllUser, 
        public: true,
      }
    },
    {
      path: '/hospitals-dashboard',
      name: 'hospitals-dashboard',
      component: HospitalDashboard,
      meta: { 
        title: 'Hospitals-Dashboard',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
    {
      path: '/doctors-dashboard',
      name: 'doctors-dashboard',
      component: DoctorDashboardView,
      meta: { 
        title: 'Doctors-Dashboard',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
    {
      path: '/meetings',
      name: 'meeting-list',
      component: MeetingList,
      meta: { 
        title: 'Meeting List',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
    {
      path: '/create-meeting',
      name: 'create-meeting',
      component: AddMeeting,
      meta: { 
        title: 'Create Meeting',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
    {
      path: '/patients',
      name: 'patient-list',
      component: PatientList,
      meta: { 
        title: 'Patient List',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
    {
      path: '/create-patient',
      name: 'create-patient',
      component: AddPatient,
      meta: { 
        title: 'Create Patient',
        layout: LayaoutForAllUser, 
        public: true
      }
    },
  ]
})

export default router
