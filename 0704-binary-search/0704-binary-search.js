/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // let middle=1
    let start=0,end=nums.length;
            // console.log(middle>0 &&middle <len)

    while (start<=end){
        // console.log(middle)
        // if(middle===undefined){ middle=len/2;}
        // else if(middle!==undefined) {
         const    middle=Math.floor((start+end)/2);
        // }
        if(nums[middle]===target){
            return middle
        }else if( target <nums[middle]){
            // start =0;
            
            end =middle-1
        }else {
            start=middle+1
            // end =middle
        }
    }
    return -1;
};