import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

import systemSet from './modules/systemSet'
import systemStatus from './modules/systemStatus'
import personAndAuthor from './modules/personAndAuthor'
import extensions from './modules/extensions.js'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', noCache: true },
        children: [
          {
            path: 'index',
            component: () => import('@/views/svg-icons/index'),
            name: 'Icons',
            meta: { title: 'icons', icon: 'icon', noCache: true },
            children: [
              {
                path: 'index',
                component: () => import('@/views/svg-icons/index'),
                name: 'Icons',
                meta: { title: 'icons', icon: 'icon', noCache: true },
                children: [
                  {
                    path: 'index',
                    component: () => import('@/views/svg-icons/index'),
                    name: 'Icons',
                    meta: { title: 'icons', icon: 'icon', noCache: true }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        components: {
          default: () => import('@/views/guide/index'),
          tree: () => import('@/components/Tree/index')
        },
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/website',
    component: Layout,
    redirect: '/website/doc',
    meta: { title: 'webSite', icon: 'webSite' },
    children: [
      {
        path: 'doc',
        component: () => import('@/views/webSite/index'),
        name: 'webSite',
        meta: { title: 'webSite', icon: 'webSite' },
        hidden: true
        // // redirect: '/website/doc/create',
        // children: [
        //   {
        //     path: 'create',
        //     component: () => import('@/views/example/create'),
        //     name: 'create',
        //     meta: { title: 'create', noCache: true },
        //     hidden: true
        //   },
        //   {
        //     path: 'guide',
        //     component: () => import('@/views/documentation/index'),
        //     name: 'create',
        //     meta: { title: 'create' },
        //     hidden: true
        //   }
        // ]
      }
    ]
  },
  systemSet,
  systemStatus,
  personAndAuthor,
  extensions
]

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      authCode: 'admin' // nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          authCode: '1' // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/svg-icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true },
        children: [
          {
            path: 'index',
            component: () => import('@/views/svg-icons/index'),
            name: 'Icons',
            meta: { title: 'icons', icon: 'icon', noCache: true },
            children: [
              {
                path: 'index',
                component: () => import('@/views/svg-icons/index'),
                name: 'Icons',
                meta: { title: 'icons', icon: 'icon', noCache: true }
              }
            ]
          }
        ]
      }
    ]
  },

  /** When your routing table is too long, you can split it into small modules**/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,
  systemSet,
  systemStatus,
  personAndAuthor,
  extensions,

  { path: '*', redirect: '/404', hidden: true }
]

export const routerMap = {
  Layout: () => import('@/views/layout/Layout'),
  CreateArticle: () => import('@/views/example/create'),
  EditArticle: () => import('@/views/example/edit'),
  ArticleList: () => import('@/views/example/list')
}

export const serverRouterMap = [
  {
    path: '/example',
    component: 'Layout',
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: 'CreateArticle',
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: 'EditArticle',
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: 'ArticleList',
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },
  // {
  //   path: '/extensions',
  //   component: 'Layout',
  //   name: 'extensions',
  //   meta: {
  //     title: 'extensions',
  //     icon: 'extensions'
  //   },
  //   children: [
  //     {
  //       /**
  //        * CDN 刷新
  //        */
  //       path: 'cdnFresh',
  //       component: 'CreateArticle',
  //       name: 'cdnFresh',
  //       meta: { title: 'cdnFresh', icon: 'cdnFresh' }
  //     },
  //     {
  //       /**
  //        * 扩展字段
  //        */
  //       path: 'extendField',
  //       component: () => import('@/views/example/list'),
  //       name: 'extendField',
  //       meta: { title: 'extendField', icon: 'extendField' }
  //     },
  //     {
  //       /**
  //        * 综合统计
  //        */
  //       path: 'statistics',
  //       component: () => import('@/views/example/list'),
  //       name: 'statistics',
  //       meta: { title: 'statistics', icon: 'statistics' }
  //     },
  //     {
  //       /**
  //        * 采集源配置
  //        */
  //       path: 'acqSource',
  //       component: () => import('@/views/example/list'),
  //       name: 'acqSource',
  //       meta: { title: 'acqSource', icon: 'acqSource' }
  //     }
  //   ]
  // }
  systemSet,
  systemStatus,
  personAndAuthor,
  extensions
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
