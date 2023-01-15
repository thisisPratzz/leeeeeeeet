/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let flag =true
    // for (i=0;i<nums.length;i++){
    //     // nums.fi
    //     const elements = nums.filter(n=>n===nums[i])
    //     // console.log(elements)
    //     if(elements.length>1){
    //         return true
    //     }
    // }
    // return false;


    const newSet = new Set(nums)
    if(nums.length===newSet.size) return false
    return true

};