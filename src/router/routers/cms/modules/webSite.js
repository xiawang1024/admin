import Layout from '@/views/layout/Layout'
import BasePath from '../config'
// TODO:左侧菜单 网站

const webSite = {
  path: `${BasePath}/website`,
  component: Layout,
  redirect: `${BasePath}/website/doc`,
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
