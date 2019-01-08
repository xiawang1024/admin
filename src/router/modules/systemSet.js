import Layout from '@/views/layout/Layout'

// TODO:左侧菜单 系统设置
const systemSet = {
  path: '/systemSet',
  component: Layout,
  name: 'systemSet',
  meta: {
    title: 'systemSet',
    icon: 'systemSet'
  },
  children: [
    {
      /**
       * 站点设置
       */
      path: 'siteSet',
      component: () => import('@/views/example/create'),
      name: 'siteSet',
      meta: {
        title: 'siteSet',
        icon: 'siteSet'
      }
    },
    {
      /**
       * 文稿来源
       */
      path: 'docSource',
      component: () => import('@/views/example/create'),
      name: 'CreateArticle',
      meta: { title: 'docSource', icon: 'docSource' }
    },
    {
      /**
       * 发布平台设置
       */
      path: 'platformSet',
      component: () => import('@/views/example/create'),
      name: 'platformSet',
      meta: { title: 'platformSet', icon: 'platformSet' }
    },
    {
      /**
       * 模板管理
       */
      path: 'temManager',
      component: () => import('@/views/example/edit'),
      name: 'temManager',
      meta: { title: 'temManager', icon: 'temManager' }
    },
    {
      /**
       * 资源文件管理
       */
      path: 'sourceManage',
      component: () => import('@/views/example/edit'),
      name: 'sourceManage',
      meta: { title: 'sourceManage', icon: 'sourceManage' }
    },
    {
      /**
       * 公用组件管理
       */
      path: 'comComponent',
      component: () => import('@/views/example/list'),
      name: 'comComponent',
      meta: { title: 'comComponent', icon: 'comComponent' }
    },
    {
      /**
       * 帮助文档管理
       */
      path: 'helpDoc',
      component: () => import('@/views/example/list'),
      name: 'helpDoc',
      meta: { title: 'helpDoc', icon: 'helpDoc' }
    }
  ]
}

export default systemSet
