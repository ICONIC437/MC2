// main.js
// Vue Router setup
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import CourseDetail from './components/CourseDetail.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/course/:id', component: CourseDetail }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
