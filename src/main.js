// VUE
import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex'; Vue.use(Vuex);
import VueParticles from 'vue-particles'; Vue.use(VueParticles);
import VueFilter from 'vue-filter'; Vue.use(VueFilter);
import VueSweetalert2 from 'vue-sweetalert2'; Vue.use(VueSweetalert2);
import VueI18n from 'vue-i18n'; Vue.use(VueI18n);
import VueAnime from 'vue-animejs'; Vue.use(VueAnime);

// JS
import lodash from 'lodash'; window._ = lodash;
import anime from 'animejs'; window.anime = anime;
// import store from './store';
// import router from './routes';

// Css
import './css/cssist.css';
import './css/sanfrancisco-font.css';

// Bower Components
import "../bower_components/cssist/cssist.js";
import "../bower_components/reset.css/reset.css";

// Components
import '../components/nextparticle/nextparticle.js'

// Code
Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
