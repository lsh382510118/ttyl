import Study from '@/pages/study';

import Css from '@/pages/study/css';
import ES6 from '@/pages/study/ES6';
import Html from '@/pages/study/html';
import Js from '@/pages/study/js';
import VuePage from '@/pages/study/vue';
import Other from '@/pages/study/other';

const study = {
  path: '/study',
  name: 'study',
  component: Study,
  redirect: '/study/Css',
  children: [{
      path: 'Other',
      name: 'Other',
      component: Other
    },
    {
      path: 'VuePage',
      name: 'VuePage',
      component: VuePage
    },
    {
      path: 'Js',
      name: 'Js',
      component: Js
    },
    {
      path: 'Html',
      name: 'Html',
      component: Html
    },
    {
      path: 'ES6',
      name: 'ES6',
      component: ES6
    },
    {
      path: 'Css',
      name: 'Css',
      component: Css
    }
  ]
}
export default study;
