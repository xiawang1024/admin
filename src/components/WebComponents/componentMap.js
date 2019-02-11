export const ComponentMap = [{
  /**
     * 文档列表
     */
  type: '0',
  docList: () => import('./components/docs/index')
},
{
  /**
     * 新建文档
     */
  type: '1',
  CreateArticle: () => import('./components/createDoc/index')
},
{
  /**
     * 增量发布
     */
  type: '2',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 发布栏目首页
     */
  type: '3',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 修改栏目
     */
  type: '4',
  AlterColumn: () => import('./components/column/columnEdit')
},
{
  /**
     * 新建子栏目
     */
  type: '5',
  CreateColumn: () => import('./components/column/columnEdit')
},
{
  /**
     * 批量发布
     */
  type: '6',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 栏目模板
     */
  type: '7',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 扩展字段
     */
  type: '8',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 标记设置
     */
  type: '9',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 图片水印
     */
  type: '10',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 图片组
     */
  type: '11',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 自定义文档列表
     */
  type: '12',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 静态网页片段
     */
  type: '13',
  ArticleList: () => import('@/views/example/list')
},
{
  /**
     * 废件箱
     */
  type: '14',
  ArticleList: () => import('@/views/example/list')
}
]

export const Components = filterComponent(ComponentMap)

function filterComponent(list) {
  const temp = {}
  list.forEach((item) => {
    const key = Object.keys(item)[1]
    temp[key] = item[key]
  })
  return temp
}
