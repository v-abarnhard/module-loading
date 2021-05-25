import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import HomePage from '@/HomePage/'

Vue.use(Router)
Vue.config.productionTip = false

const PageOne = async () => import(/* webpackChunkName: 'page_one' */ '@/PageOne')
const PageTwo = async () => import(/* webpackChunkName: 'page_two' */ '@/PageTwo')

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne,
      props: true
    },
    {
      path: '/page-two',
      name: 'PageTwo',
      component: PageTwo,
      props: true
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
