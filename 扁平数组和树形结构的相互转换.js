/**
 * @description 扁平化数组转为树形结构
 * @param arr 要转化的数组数据 pId 根标识
 * @return
 */
 export const listToTree = (arr, pId = 0) => {
  const cloneArrayList = JSON.parse(JSON.stringify(arr));
  const result = [];

  const map = cloneArrayList.reduce((res, v) => {
    res[v.id] = v;
    return res;
  }, {});

  for (const item of cloneArrayList) {
    if (item.parent_id === pId) {
      result.push(item);
      continue;
    }
    if (item.parent_id in map) {
      const parent = map[item.parent_id];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return result;
};

/**
 * @description 树形结构转为扁平数组
 * @param tree 要转换的树形结构数据
 * @return
 */
export const treeToList = (tree) => {
  const res = [];
  let queen = JSON.parse(JSON.stringify(tree));
  while (queen.length) {
    const first = queen.shift();
    if (first.children) {
      queen = queen.concat(first.children);
      delete first.children;
    }

    res.push(first);
  }
  return res;
};