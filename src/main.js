import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.scss'
import fastclick from 'fastclick'
import 'swiper/dist/css/swiper.css'
fastclick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
