/** @format */

// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
Vue.config.devtools = true;
// if (process.env.NODE_ENV == 'development') {
// 	Vue.config.devtools = true;
// } else {
// 	Vue.config.devtools = false;
// }
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
