/**
 * 获取树结构下符合某一条件的所有节点
 * @param tree
 * @param callback
 */
export const getAllTreeNodeByCondition = (tree: any[], cb: Function) => {
  let arr: any[] = []
  tree.forEach((item: any) => {
    if (item.children && item.children?.length > 0) {
      let _l = getAllTreeNodeByCondition(item.children, cb)
      arr = arr.concat(_l)
    }
    if (cb(item)) {
      arr.push(item)
    }
  })
  return arr
}



