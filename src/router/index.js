import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';



import mood from '@/pages/mood';
import study from '@/pages/study';
import mine from '@/pages/mine';
import work from '@/pages/work';
import life from '@/pages/life';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect:'/mood'
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
