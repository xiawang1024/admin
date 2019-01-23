import Layout from '@/views/layout/Layout'

// TODO:左侧菜单 人员和权限
const personAndAuthor = {
  path: '/personAndAuthor',
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
       * 角色设定
       */
      path: 'character',
      component: () => import('@/views/personAndAuthor/character'),
      name: 'character',
      meta: { title: 'character', icon: 'character' }
    },
    {
      /**
       * 分配人员角色
       */
      path: 'personRole',
      component: () => import('@/views/personAndAuthor/personRole'),
      name: 'personRole',
      meta: { title: 'personRole', icon: 'personRole' }
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
