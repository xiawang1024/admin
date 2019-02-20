import Layout from '@/views/layout/Layout'

// TODO:左侧菜单 网站

const webSite = {
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
    }
  ]
}

export default webSite
