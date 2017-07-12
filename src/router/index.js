import Vue from 'vue'
import Router from 'vue-router'
import Starter from '@/components/Starter'
import LogSMS from '@/components/LogSMS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Starter',
      component: Starter
    },
    {
      path: '/dsfds',
      name: 'LogSMS',
      component: LogSMS
    }
  ]
})
