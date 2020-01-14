import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _204b4cb0 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _0510531e = () => interopDefault(import('../pages/asyncData.vue' /* webpackChunkName: "pages/asyncData" */))
const _961d7a24 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _57a1ae54 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _7a4fa4ac = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _204b4cb0,
    name: "about"
  }, {
    path: "/asyncData",
    component: _0510531e,
    name: "asyncData"
  }, {
    path: "/news",
    component: _961d7a24,
    name: "news"
  }, {
    path: "/news/:id",
    component: _57a1ae54,
    name: "news-id"
  }, {
    path: "/",
    component: _7a4fa4ac,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
