var mergeTwoLists = function(l1, l2) {
  if(l1 === null){
      return l2;
  }
  if(l2 === null){
      return l1;
  }
  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }else{
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// l1 1 l2 1 l2.next 
// l1 1 l2 3 l1.next 1 ->  2 -> 3 -> 4 -> 4
// l1 2 l2 3 l1.next 2 -> 3 -> 4 -> 4
// l1 4 l2 3 l2.next  3 -> 4 -> 4
// l1 4 l2 4 l2.next 4 -> 4
// l1 4 l2 null 4