import Layout from '@/views/layout/Layout'
import BasePath from '../config'
// TODO:左侧菜单 系统设置
const systemSet = {
  path: `${BasePath}/systemSet`,
  component: Layout,
  name: 'systemSet',
  meta: {
    title: 'systemSet',
    icon: 'systemSet',
    role: 'editor'
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
        icon: 'siteSet',
        role: 'editor'
      }
    },
    {
      /**
       * 文稿来源
       */
      path: 'docSource',
      component: () => import('@/views/system-set/docSource'),
      name: 'DocSource',
      meta: { title: 'docSource', icon: 'docSource', role: 'editor' }
    },
    {
      /**
       * 发布平台设置
       */
      path: 'platformSet',
      component: () => import('@/views/system-set/platformSet'),
      name: 'platformSet',
      meta: { title: 'platformSet', icon: 'platformSet', role: 'editor' }
    },
    {
      /**
       * 模板管理
       */
      path: 'temManager',
      component: () => import('@/views/system-set/temManager'),
      name: 'temManager',
      meta: { title: 'temManager', icon: 'temManager', role: 'editor' }
    },
    {
      /**
       * 模板添加与修改
       */
      path: 'temEdit',
      component: () => import('@/views/system-set/temEdit'),
      name: 'temEdit',
      meta: { title: 'temEdit', icon: 'temEdit', role: 'editor' },
      hidden: true
    },
    {
      /**
       * 资源文件管理
       */
      path: 'sourceManage',
      component: () => import('@/views/system-set/sourceManage'),
      name: 'sourceManage',
      meta: { title: 'sourceManage', icon: 'sourceManage', role: 'editor' }
    },
    {
      /**
       * 公用组件管理
       */
      path: 'comComponent',
      component: () => import('@/views/system-set/comComponent'),
      name: 'comComponent',
      meta: { title: 'comComponent', icon: 'comComponent', role: 'editor' }
    },
    {
      /**
       * 公共组件添加与修改
       */
      path: 'componentEdit',
      component: () => import('@/views/system-set/ComponentEdit'),
      name: 'componentEdit',
      meta: { title: 'componentEdit', icon: 'componentEdit', role: 'editor' },
      hidden: true
    },
    {
      /**
       * 帮助文档管理
       */
      path: 'helpDoc',
      component: () => import('@/views/system-set/helpDoc'),
      name: 'helpDoc',
      meta: { title: 'helpDoc', icon: 'helpDoc', role: 'editor' }
    },
    {
      /**
       * 帮助文档添加与修改
       */
      path: 'helpDocEdit',
      component: () => import('@/views/system-set/helpDocEdit'),
      name: 'helpDocEdit',
      meta: { title: 'helpDocEdit', icon: 'helpDocEdit', role: 'editor' },
      hidden: true
    }
  ]
}

export default systemSet
