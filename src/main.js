import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Users from './components/Users.vue'
import Hello from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/users/:teamId', component: Users },
  { path: '/', component: Hello }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
