export const ComponentMap = [
  {
    type: '1',
    CreateArticle: () => import('@/views/example/create')
  },
  {
    type: '2',
    ArticleList: () => import('@/views/example/list')
  }
]

export const Components = filterComponent(ComponentMap)

function filterComponent(list) {
  const temp = {}
  list.forEach(item => {
    const key = Object.keys(item)[1]
    temp[key] = item[key]
  })
  return temp
}
