// 两个栈实现队列
const stack1 = [];
const stack2 = [];
function push(node) {
  stack1.push(node);
}
function pop() {
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop() || null;
}


// 两个队列实现栈
const queue1 = []
const queue2 = []
function push(x) {
  if (queue1.length === 0) {
    queue1.push(x)
    while (queue2.length) {
      queue1.push(queue2.shift())
    }
  } else if (queue2.length === 0) {
    queue2.push(x)
    while (queue1.length) {
      queue2.push(queue1.shift())
    }
  }
};
function pop() {
  if (queue1.length !== 0) {
    return queue1.shift()
  } else {
    return queue2.shift()
  }
};