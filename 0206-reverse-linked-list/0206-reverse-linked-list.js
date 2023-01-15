/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
        if (head === null) return null;

    let current =head;
    let previous =null
    while(current){
        // console.log(current)
        let next = current.next;
        // console.log(next)
        current.next=previous;
                // console.log(current)

        previous=current
        current=next
    }
    return previous
    
};