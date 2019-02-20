import Layout from '@/views/layout/Layout'
import BasePath from '../config'

// TODO:左侧菜单 人员和权限
const personAndAuthor = {
  path: `${BasePath}/personAndAuthor`,
  component: Layout,
  name: 'personAndAuthor',
  meta: {
    title: 'personAndAuthor',
    icon: 'personAndAuthor'
  },
  children: [
    {
      /**
       * 权限分组
       */
      path: 'permissionGroup',
      component: () => import('@/views/personAndAuthor/permissionGroup'),
      name: 'permissionGroup',
      meta: { title: 'permissionGroup', icon: 'permissionGroup' }
    },
    {
      /**
       * 权限分组编辑
       */
      path: 'permissionGroupEdit',
      component: () => import('@/views/personAndAuthor/permissionGroupEdit'),
      name: 'permissionGroupEdit',
      meta: { title: 'permissionGroupEdit', icon: 'permissionGroupEdit' },
      hidden: true
    },
    {
      /**
       * 角色设定
       */
      path: 'character',
      component: () => import('@/views/personAndAuthor/character'),
      name: 'character',
      meta: { title: 'character', icon: 'character' }
    },
    {
      /**
       * 角色编辑
       */
      path: 'characterEdit',
      component: () => import('@/views/personAndAuthor/characterEdit'),
      name: 'characterEdit',
      meta: { title: 'characterEdit', icon: 'characterEdit' },
      hidden: true
    },
    {
      /**
       * 人员角色管理
       */
      path: 'personRole',
      component: () => import('@/views/personAndAuthor/personRole'),
      name: 'personRole',
      meta: { title: 'personRole', icon: 'personRole' }
    },
    {
      /**
       * 人员角色分配
       */
      path: 'personRoleDistribute',
      component: () => import('@/views/personAndAuthor/personRoleDistribute'),
      name: 'personRoleDistribute',
      meta: { title: 'personRoleDistribute', icon: 'personRoleDistribute' },
      hidden: true
    },
    {
      /**
       * 系统功能
       */
      path: 'systemFunc',
      component: () => import('@/views/personAndAuthor/systemFunc'),
      name: 'systemFunc',
      meta: { title: 'systemFunc', icon: 'systemFunc' }
    }
  ]
}

export default personAndAuthor
