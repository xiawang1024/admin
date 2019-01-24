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
      component: () => import('@/views/system-set/siteSet'),
      name: 'SiteSet',
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
      component: () => import('@/views/system-set/docSource'),
      name: 'DocSource',
      meta: { title: 'docSource', icon: 'docSource' }
    },
    {
      /**
       * 发布平台设置
       */
      path: 'platformSet',
      component: () => import('@/views/system-set/platformSet'),
      name: 'platformSet',
      meta: { title: 'platformSet', icon: 'platformSet' }
    },
    {
      /**
       * 模板管理
       */
      path: 'temManager',
      component: () => import('@/views/system-set/temManager'),
      name: 'temManager',
      meta: { title: 'temManager', icon: 'temManager' }
    },
    {
      /**
       * 模板添加与修改
       */
      path: 'temEdit',
      component: () => import('@/views/system-set/temEdit'),
      name: 'temEdit',
      meta: { title: 'temEdit', icon: 'temEdit' },
      hidden: true
    },
    {
      /**
       * 资源文件管理
       */
      path: 'sourceManage',
      component: () => import('@/views/system-set/sourceManage'),
      name: 'sourceManage',
      meta: { title: 'sourceManage', icon: 'sourceManage' }
    },
    {
      /**
       * 公用组件管理
       */
      path: 'comComponent',
      component: () => import('@/views/system-set/comComponent'),
      name: 'comComponent',
      meta: { title: 'comComponent', icon: 'comComponent' }
    },
    {
      /**
       * 公共组件添加与修改
       */
      path: 'componentEdit',
      component: () => import('@/views/system-set/ComponentEdit'),
      name: 'componentEdit',
      meta: { title: 'componentEdit', icon: 'componentEdit' },
      hidden: true
    },
    {
      /**
       * 帮助文档管理
       */
      path: 'helpDoc',
      component: () => import('@/views/system-set/helpDoc'),
      name: 'helpDoc',
      meta: { title: 'helpDoc', icon: 'helpDoc' }
    },
    {
      /**
       * 帮助文档添加与修改
       */
      path: 'helpDocEdit',
      component: () => import('@/views/system-set/helpDocEdit'),
      name: 'helpDocEdit',
      meta: { title: 'helpDocEdit', icon: 'helpDocEdit' },
      hidden: true
    }
  ]
}

export default systemSet
