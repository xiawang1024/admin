import Layout from '@/views/layout/Layout'

import cmsPath from '../config'
// TODO:左侧菜单 网站

const webSite = {
  path: `${cmsPath}/website`,
  component: Layout,
  redirect: `${cmsPath}/website/doc`,
  meta: { title: 'webSite', icon: 'webSite' },
  children: [
    {
      path: 'doc',
      component: () => import('@/views/webSite/index'),
      name: 'webSite',
      meta: { title: 'webSite', icon: 'webSite' },
      hidden: true
    }
  ]
}

export default webSite
