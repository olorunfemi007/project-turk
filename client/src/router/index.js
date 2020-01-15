import Vue from 'vue'
import Router from 'vue-router'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Dashboard from '../views/users/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/posts/add',
      component: addpost,
      name: 'addpost'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    }
  ]
})
