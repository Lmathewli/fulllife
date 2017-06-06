import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article/article.vue'
import AddArticle from '../components/addarticle/addarticle.vue'
import Login from '../components/login.vue'
import Memory from '../components/memory/memory.vue'
import AddMemory from '../components/memory/add-memory.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Article',
    component: Article
  }, {
    path: '/addarticle',
    name: 'AddArticle',
    component: AddArticle
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/Memory',
    name: 'Memory',
    component: Memory
  }, {
    path: '/addmemory',
    name: 'AddMemory',
    component: AddMemory
  }]
})
