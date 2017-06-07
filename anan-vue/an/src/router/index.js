import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Myself from '@/pages/Myself'
import Goodthing from '@/components/Goodthing'
import Like from '@/components/Like'
import Colorful from '@/components/Colorful'
import Welcome from '@/components/Welcome'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: Article
  },
  {
    path: '/myself',
    name: 'myself',
    component: Myself
  },
  {
    path: '/goodthing',
    name: 'goodthing',
    component: Goodthing
  },
  {
    path: '/like/:id',
    name: 'like',
    component: Like
  },
  {
    path: '/colorful',
    name: 'colorful',
    component: Colorful
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  }
]


export default new Router({
  routes
})
