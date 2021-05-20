import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'
import less from 'less'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(less)

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')