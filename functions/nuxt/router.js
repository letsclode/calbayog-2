import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d04d4476 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0975d4d8 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3e99ef5c = () => interopDefault(import('../pages/departments/index.vue' /* webpackChunkName: "pages/departments/index" */))
const _16847a58 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _138a9f34 = () => interopDefault(import('../pages/fb.vue' /* webpackChunkName: "pages/fb" */))
const _5a8c040e = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _4c93efdc = () => interopDefault(import('../pages/events/sid2.vue' /* webpackChunkName: "pages/events/sid2" */))
const _d7d59414 = () => interopDefault(import('../pages/news/vids.vue' /* webpackChunkName: "pages/news/vids" */))
const _d957ce78 = () => interopDefault(import('../pages/departments/_id.vue' /* webpackChunkName: "pages/departments/_id" */))
const _46732b88 = () => interopDefault(import('../pages/events/_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _7dc7b1f6 = () => interopDefault(import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _90dd8eec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d04d4476,
    name: "about"
  }, {
    path: "/contact",
    component: _0975d4d8,
    name: "contact"
  }, {
    path: "/departments",
    component: _3e99ef5c,
    name: "departments"
  }, {
    path: "/events",
    component: _16847a58,
    name: "events"
  }, {
    path: "/fb",
    component: _138a9f34,
    name: "fb"
  }, {
    path: "/news",
    component: _5a8c040e,
    name: "news"
  }, {
    path: "/events/sid2",
    component: _4c93efdc,
    name: "events-sid2"
  }, {
    path: "/news/vids",
    component: _d7d59414,
    name: "news-vids"
  }, {
    path: "/departments/:id",
    component: _d957ce78,
    name: "departments-id"
  }, {
    path: "/events/:id",
    component: _46732b88,
    name: "events-id"
  }, {
    path: "/news/:id",
    component: _7dc7b1f6,
    name: "news-id"
  }, {
    path: "/",
    component: _90dd8eec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
