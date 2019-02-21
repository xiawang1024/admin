import Layout from '@/views/layout/Layout'
import cmsPath from '../config'

// TODO:左侧菜单 扩展功能
const extensions = {
  path: `${cmsPath}/extensions`,
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
      component: () => import('@/views/extensions/cdnFresh'),
      name: 'cdnFresh',
      meta: { title: 'cdnFresh', icon: 'cdnFresh' }
    },
    {
      /**
       * 扩展字段
       */
      path: 'extendField',
      component: () => import('@/views/extensions/extendField'),
      name: 'extendField',
      meta: { title: 'extendField', icon: 'extendField' }
    },
    {
      /**
       * 综合统计
       */
      path: 'statistics',
      component: () => import('@/views/extensions/statistics'),
      name: 'statistics',
      meta: { title: 'statistics', icon: 'statistics' }
    },
    {
      /**
       * 采集源配置
       */
      path: 'acqSource',
      component: () => import('@/views/extensions/acqSource'),
      name: 'acqSource',
      meta: { title: 'acqSource', icon: 'acqSource' }
    }
  ]
}

export default extensions
