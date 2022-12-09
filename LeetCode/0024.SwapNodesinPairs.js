/*1. n1 = p.next 
  2. n2 = p.next.next  
  3. p.next = n2  
  4. n1.next = n2.next  
  5. n2.next = n1  
  6. p =n1 */
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy;
  while (current.next !== null && current.next.next !== null) {
    let n1 = current.next;
    let n2 = current.next.next;
    current.next = n2;
    n1.next = n2.next; //这句必须下一句先写,不让n2.next会指会自身造成死循环
    n2.next = n1;
    current = n1;
  }

  return dummy.next;
};
