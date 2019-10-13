import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'
import myweb from '@/components/myweb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },{
      path: '/myweb',
      name: 'myweb',
      component: myweb
    }
  ]
})
