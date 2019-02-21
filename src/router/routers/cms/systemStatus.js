import Layout from '@/views/layout/Layout'
import { cmsPath } from '../config'
// TODO:左侧菜单 系统状态
const systemStatus = {
  path: `${cmsPath}/systemStatus`,
  component: Layout,
  name: 'systemStatus',
  meta: {
    title: 'systemStatus',
    icon: 'systemStatus'
  },
  children: [
    {
      /**
       * 日志
       */
      path: 'logs',
      component: () => import('@/views/system-status/logs'),
      name: 'logs',
      meta: { title: 'logs', icon: 'logs' }
    },
    {
      /**
       * 后台任务
       */
      path: 'backTask',
      component: () => import('@/views/system-status/backTask'),
      name: 'backTask',

      meta: { title: 'backTask', icon: 'backTask' }
    }
  ]
}

export default systemStatus
