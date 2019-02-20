/**
 * 子系统路由
 */
import { cmsRouterMap } from './routers/cms'
import { userRouterMap } from './routers/user'

const routerMap = [
  {
    type: '0',
    route: cmsRouterMap
  },
  {
    type: '1',
    route: userRouterMap
  }
]

export default routerMap
