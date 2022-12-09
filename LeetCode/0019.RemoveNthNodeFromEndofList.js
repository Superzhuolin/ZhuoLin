var removeNthFromEnd1 = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;  //用来判断是否到底最后结点
  for (let i = 0; i <= n; i++) {
    // 让n2领先n1 n+1个身位
    n2 = n2.next;
  }
  while (n2 != null) {
    // 让n2走到末尾(不为空)
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};

var removeNthFromEnd2 = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;
  for (let i = 0; i < n; i++) {
    // 让n2领先n1 n个身位
    n2 = n2.next;
  }
  while (n2.next != null) {
    // 让n2走到末尾(不为空)
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};
