function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 获取链表长度
var getListNodeLen = function (head) {
  let len = 0;
  let nowNode = head;
  while (nowNode) {
      len++;
      nowNode = nowNode.next;
  }
  return len;
}

// 查找倒数第K项
var getKthFromEnd = function(head, k) {
  var first = head;
  var second = head;
  var i = 0;
  while(first != null){
      if(i < k){
          first = first.next;
      }else{
          first = first.next;
          second = second.next;
      }
      i++;
  }
  return second;
};

// 翻转链表
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
      let cnext = curr.next;
      curr.next = prev === null ? null : prev
      prev = curr;
      curr = cnext;
  }
  return prev
};

// 获取链表n项
var getListNodeLen = function (head, n) {
  let len = 0;
  let nowNode = head;
  while (nowNode) {
      len++;
      nowNode = nowNode.next;
  }
  return len;
}

// 删除倒数第n项
var removeNthFromEnd = function(head, n) {
  let len = getListNodeLen(head);
  if (n > len) return null;
  let idx = len - n; // 3
  let result = new ListNode();
  result.next = head;
  let pre = result;
  let cur = pre.next;
  for (let i = 0; i < idx; i++) {
      pre = cur;
      cur = pre.next;
  }
  pre.next = cur.next;
  return result.next;
};
