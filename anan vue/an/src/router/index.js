import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import Article from '@/pages/Article'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article
  },
]


export default new Router({
  routes
})
