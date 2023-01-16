/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let prefix =[];
    let postfix=1,prefixval=1;

    for (let i = 0; i < nums.length; i++) {
        prefix[i] = prefixval;
        prefixval *= nums[i];
    }
    
    // for (let i=nums.length-2;i>=0;i--){
    //             postFix =postFix*nums[i+1]
    //    prefix[i]=nums[i]*postFix;
    // }
        for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        prefix[i] *= postfix;
    }
    return prefix
    
  
    
    
      
//         const result = [];
//     let prefix = 1;
//     let postfix = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         result[i] = prefix;
//         prefix *= nums[i];
//     }
//     for (let i = nums.length - 2; i >= 0; i--) {
//         postfix *= nums[i + 1];
//         result[i] *= postfix;
//     }
    
//     return result;

    
    
    
    
    
    
    
    
    
    
    // const returnArr =[];
    // for (let i=0;i<nums.length;i++){
    //     let temp=1;
    //     for( let j=0;i<nums.length;j++){
    //         if(i!==j)// continue;
    //         temp=temp*nums[j]
    //     }
    //     returnArr.push(temp)
    // }
    // return returnArr
    
    
    
};