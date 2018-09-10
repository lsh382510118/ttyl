import page1 from '@/pages/mood/page1';

import Mood from '@/pages/mood';

const mood ={
    path: '/mood',
    name: 'mood',
    component: Mood,
    children:[
        {
            path: '/mood/page1',
            name: 'page1',
            component: page1
        }
    ]
  }
  export default mood;