import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';



import mood from '@/pages/mood';
import study from '@/pages/study';
import mine from '@/pages/mine';
import work from '@/pages/work';
import life from '@/pages/life';
import forTT from '@/pages/forTT';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect:'/mood'
    },
    {
      path: '/forTT',
      name: 'forTT',
      component: forTT
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/mood',
      name: 'mood',
      component: mood
    }
  ]
})
