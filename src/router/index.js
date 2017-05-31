import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article/article.vue'
import AddArticle from '../components/addarticle/addarticle.vue'

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
  }]
})
