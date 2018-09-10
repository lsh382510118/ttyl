import Study from '@/pages/study';

import Css from '@/pages/study/css';
import ES6 from '@/pages/study/ES6';
import Html from '@/pages/study/html';
import Js from '@/pages/study/js';
import VuePage from '@/pages/study/vue';
import Other from '@/pages/study/other';

const study ={
    path: '/study',
    name: 'study',
    component: Study,
    redirect: '/study/Css',
    children:[
        {
            path: '/study/Other',
            name: 'Other',
            component: Other
        },
        {
            path: '/study/VuePage',
            name: 'VuePage',
            component: VuePage
        },
        {
            path: '/study/Js',
            name: 'Js',
            component: Js
        },
        {
            path: '/study/Html',
            name: 'Html',
            component: Html
        },
        {
            path: '/study/ES6',
            name: 'ES6',
            component: ES6
        },
        {
            path: '/study/Css',
            name: 'Css',
            component: Css
        }
    ]
  }
  export default study;