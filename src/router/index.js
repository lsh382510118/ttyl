import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';



import mood from './mood/mood01';
import study from './study/study';
import mine from '@/pages/mine';
import work from '@/pages/work';
import life from '@/pages/life';
import forTT from '@/pages/forTT';




Vue.use(Router)
let router;
export default router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/mood',
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
    },study,mood
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
  
})