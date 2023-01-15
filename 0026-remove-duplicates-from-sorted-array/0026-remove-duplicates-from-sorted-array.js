/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //      nums = [...new Set(nums)]
    //      console.log(nums)

    for(let i=0 ;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }

    return nums.length
};