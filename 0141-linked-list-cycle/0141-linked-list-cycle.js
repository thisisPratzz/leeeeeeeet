/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {


    try{
        JSON.stringify(head)
        return false
    }catch(err){
        return true
    }
    // console.log(JSON.stringify(head))
    // if (head===null) return false

    // if (head.next===null) return false
    // let myset = new Set()
    // current =head;
    // while (current){
    //     if(myset.has(current.val)){
    //         return true
    //     }else{
    //         myset.add(current.val)
    //     }
    // }
    // return false
};