import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta'
import router from './router';
import store from './store';
import './css/style.css';

Vue.config.productionTip = false;
Vue.use(VueMeta, {
	keyName: 'head', 
	attribute: 'data-vue-meta',
	refreshOnceOnNavigation: true
  });
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
