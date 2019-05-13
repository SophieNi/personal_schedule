import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import CreateToDo from '@/components/CreateToDo'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/CreateToDo',
      name: 'CreateToDo',
      component: CreateToDo
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
