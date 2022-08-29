export const ContentConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '旧价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '新价格', minWidth: '80' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'imgUrl' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    { prop: 'handler', label: '操作', minWidth: '90', slotName: 'handler' }
  ],
  showIndexColum: true,
  showSelectColum: true,
  title: '商品列表'
}
