import Vue from 'vue';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import 'babel-polyfill';

import App from './App';
import router from './router';
import store from './store';

import './assets/css/bootstrap.min.css';
import './assets/css/flaticon.css';
import './assets/css/slicknav.min.css';
import './assets/css/jquery-ui.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/js/jquery-3.2.1.min.js';
// import './assets/js/bootstrap.min.js';
import './assets/js/jquery.slicknav.min.js';
import './assets/js/owl.carousel.min.js';
import './assets/js/jquery.nicescroll.min.js';
import './assets/js/jquery.zoom.min.js';
import './assets/js/jquery-ui.min.js';
import './assets/js/main.js';



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
