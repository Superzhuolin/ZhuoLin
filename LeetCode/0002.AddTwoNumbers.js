/* dummy节点作用:1.作为新链表的头结点(让curr尽管往前走,dummy会占住头结点的位置)  
为什么返回dummy.next? 因为dummy是空结点,dummy.next才有数据
2.解决链表头部的极端情况 */

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr = curr.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummy.next;
};