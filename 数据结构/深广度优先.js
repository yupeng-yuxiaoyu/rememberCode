//1.深度优先遍历的递归写法
function deepFirstSearch(node,nodeList) {  
  if (node) {    
      nodeList.push(node);    
      var children = node.children;    
      for (var i = 0; i < children.length; i++) 
      //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
      deepFirstSearch(children[i],nodeList);    
  }    
  return nodeList;  
} 

//2.深度优先遍历的非递归写法
function deepFirstSearch(node) {
  var nodes = [];
  if (node != null) {
      var stack = [];
      stack.push(node);
      while (stack.length != 0) {
      var item = stack.pop();
      nodes.push(item);
      var children = item.children;
      for (var i = children.length - 1; i >= 0; i--)
          stack.push(children[i]);
      }
  }
  return nodes;
}

//3.广度优先遍历的递归写法
function breadthFirstSearch(node) {
  var nodes = [];
  var i = 0;
  if (!(node == null)) {
      nodes.push(node);
      breadthFirstSearch(node.nextElementSibling);
      node = nodes[i++];
      breadthFirstSearch(node.firstElementChild);
  }
  return nodes;
}

//4.广度优先遍历的非递归写法
function breadthFirstSearch(node) {  
  var nodes = [];  
  if (node != null) {  
      var queue = [];  
      queue.unshift(node);  
      while (queue.length != 0) {  
          var item = queue.shift();  
          nodes.push(item);  
          var children = item.children;  
          for (var i = 0; i < children.length; i++)  
              queue.push(children[i]);  
      }  
  }  
  return nodes;  
}