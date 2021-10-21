import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newbovino from '../views/newbovino.vue'
import About from '../views/About.vue'
import Loggin from '../views/Loggin.vue'
import Register from '../views/Register.vue'
import LogginAccount from '../views/LogginCuenta.vue'
import Editar from '../views/Editar.vue'
import components from '../components/components.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Addbovino',
    name: 'newbovino',
    component: newbovino
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Loggin',
    name: 'Loggin',
    component: Loggin
  },
  {
    path: '/Register',
    name: 'Registro',
    component: Register
  },
  {
    path: '/LogginAccount',
    name: 'LogginAccount',
    component: LogginAccount
  },
  {
    path: '/Edit/:animal',
    name: 'EditarBovino',
    component: Editar
  },
  {
    path: '/components',
    name: 'components',
    component: components
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//router.beforeEach((to, from, next) => {
  //if (!store.state.token && to.path != '/LogginAccount') {

    //next({ name: 'LogginAccount' })
  //} else {

    //next() // go to wherever I'm going
  //}

//})

export default router
