import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/article/article.vue'
import AddArticle from '../components/addarticle/addarticle.vue'
import Login from '../components/login.vue'
import Memories from '../components/memory/memories.vue'
import Memory from '../components/memory/Memory.vue'
import EditMemory from '../components/memory/edit-memory.vue'
import Story from '../components/story/story.vue'
import Blog from '../components/blog/blog.vue'
import Label from '../components/label/label.vue'
import Book from '../components/book/book.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Memories
  }, {
    path: '/article',
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
    path: '/Memories',
    name: 'Memories',
    component: Memories
  }, {
    path: '/EditMemory',
    name: 'EditMemory',
    component: EditMemory
  }, {
    path: '/Story',
    name: 'Story',
    component: Story
  }, {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  }, {
    path: '/Book',
    name: 'Book',
    component: Book
  }, {
    path: '/Label',
    name: 'Label',
    component: Label
  }, {
    path: '/basetool',
    component: resolve => require(['../components/basetool/index.vue'], resolve),
    children: [
      {
        path: '/form',
        component: resolve => require(['../components/basetool/form.vue'], resolve)
      },
      {
        path: '/table',
        component: resolve => require(['../components/basetool/table.vue'], resolve)
      },
      {
        path: '/markdown-viewer',
        component: resolve => require(['../components/basetool/markdown-viewer.vue'], resolve)
      },
      {
        path: '/markdown-editor-1',
        component: resolve => require(['../components/basetool/markdown-editor-1.vue'], resolve)
      },
      {
        path: '/markdown-editor-2',
        component: resolve => require(['../components/basetool/markdown-editor-2.vue'], resolve)
      },
      {
        path: '/rtf',
        component: resolve => require(['../components/basetool/rtf.vue'], resolve)
      }, {
        path: '/upload',
        component: resolve => require(['../components/basetool/upload.vue'], resolve)
      }, {
        path: '/echarts',
        component: resolve => require(['../components/basetool/echarts.vue'], resolve)
      }, {
        path: '/PdfTool',
        component: resolve => require(['../components/basetool/pdf.vue'], resolve)
      }
    ]
  } ]
})
