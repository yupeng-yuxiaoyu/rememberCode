// 前序遍历：根结点 ---> 左子树 ---> 右子树
// 中序遍历：左子树---> 根结点 ---> 右子树
// 后序遍历：左子树 ---> 右子树 ---> 根结点
// 中序
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};

// 前序
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};

// 后序
var postorderTraversal = function (root, array = []) {
  if (root) {
    postorderTraversal(root.left, array);
    postorderTraversal(root.right, array);
    array.push(root.val);
  }
  return array;
};

/*
  广度优先遍历：使用队列实现
*/
function levelOrderTravel(nodeTree) {
  // 如果树为空，结束
  if(!nodeTree) return;
  // 初始化一个队列
  let queue = []
  // 将根节点入队
  queue.push(nodeTree)
  let node = null
  // 只要队列不为空，继续循环
  while(queue.length) {
    // 按顺序取出队列中最早入队的节点
    node = queue.shift()
    console.log(node.data);
    // 如果出队节点存在左孩子，就将其左孩子入队
    if(node.left) {
      queue.push(node.left)
    }
    // 如果出队节点存在右孩子，就将其右孩子入队
    if(node.right) {
      queue.push(node.right)
    }
  }
}
console.log("广度优先遍历-使用队列实现:");