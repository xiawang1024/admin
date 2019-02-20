import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 *公共路由
 */
import { constantRouterMap } from './public'

/**
 * 分系统路由
 */
import { cmsRouterMap } from './routers/cms'

export const asyncRouterMap = cmsRouterMap

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
