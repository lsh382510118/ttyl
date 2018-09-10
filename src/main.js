import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios';
import qs from 'qs';


// CSS
import './assets/reset.css';
import './assets/common.css';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// common
import './controller/elementsUse/elements';

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
