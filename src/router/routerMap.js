const routerMap = {
  Layout: () => import('@/views/layout/Layout'),
  CreateArticle: () => import('@/views/example/create'),
  EditArticle: () => import('@/views/example/edit'),
  ArticleList: () => import('@/views/example/list')
}

export default routerMap
