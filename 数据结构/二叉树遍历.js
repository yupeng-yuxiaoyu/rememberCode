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
  if (!nodeTree) return;
  // 初始化一个队列
  let queue = []
  // 将根节点入队
  queue.push(nodeTree)
  let node = null
  // 只要队列不为空，继续循环
  while (queue.length) {
    // 按顺序取出队列中最早入队的节点
    node = queue.shift()
    console.log(node.data);
    // 如果出队节点存在左孩子，就将其左孩子入队
    if (node.left) {
      queue.push(node.left)
    }
    // 如果出队节点存在右孩子，就将其右孩子入队
    if (node.right) {
      queue.push(node.right)
    }
  }
}
console.log("广度优先遍历-使用队列实现:");


// 二叉树右视图
var rightSideView = function (root) {
  //二叉树右视图 只需要把每一层最后一个节点存储到res数组
  let res = [],
    queue = [];
  queue.push(root);
  while (queue.length && root !== null) {
    // 记录当前层级节点个数
    let length = queue.length;
    while (length--) {
      let node = queue.shift();
      //length长度为0的时候表明到了层级最后一个节点
      if (!length) {
        res.push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};

// 二叉树左视图
var leftSideView = function (root) {
  //二叉树左视图 只需要把每一层第一个节点存储到res数组
  let res = [],
    queue = [];
  queue.push(root);
  while (queue.length && root !== null) {
    // 记录当前层级节点个数
    let length = queue.length;
    while (length) {
      let node = queue.shift();
      //length长度为0的时候表明到了层级最后一个节点
      if (length === queue.length) {
        res.push(node.val);
      }
      length--;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};

// 层序遍历
var levelOrder = function (root) {
  //二叉树的层序遍历
  let res = [],
    queue = [];
  queue.push(root);
  if (root === null) {
    return res;
  }
  while (queue.length !== 0) {
    // 记录当前层级节点数
    let length = queue.length;
    //存放每一层的节点 
    let curLevel = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      curLevel.push(node.val);
      // 存放当前层下一层的节点
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的结果放到结果数组
    res.push(curLevel);
  }
  return res;
};