import Layout from '@/views/layout/Layout'

// TODO:左侧菜单 扩展功能
const extensions = {
  path: '/extensions',
  component: Layout,
  name: 'extensions',
  meta: {
    title: 'extensions',
    icon: 'extensions'
  },
  children: [
    {
      /**
       * CDN 刷新
       */
      path: 'cdnFresh',
      component: () => import('@/views/example/create'),
      name: 'cdnFresh',
      meta: { title: 'cdnFresh', icon: 'cdnFresh' }
    },
    {
      /**
       * 扩展字段
       */
      path: 'extendField',
      component: () => import('@/views/example/list'),
      name: 'extendField',
      meta: { title: 'extendField', icon: 'extendField' }
    },
    {
      /**
       * 综合统计
       */
      path: 'statistics',
      component: () => import('@/views/example/list'),
      name: 'statistics',
      meta: { title: 'statistics', icon: 'statistics' }
    },
    {
      /**
       * 采集源配置
       */
      path: 'acqSource',
      component: () => import('@/views/example/list'),
      name: 'acqSource',
      meta: { title: 'acqSource', icon: 'acqSource' }
    }
  ]
}

export default extensions
