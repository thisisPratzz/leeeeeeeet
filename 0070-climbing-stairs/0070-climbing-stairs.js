/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // if (n===2 )return 2
    // let ways =1
    // let previous =1
    // for (i=1;i<n;i++){
    //     console.log("i:"+i+"ways:"+ways)
    //     ways +=previous
    //     previous =i
    // }
    // return ways


    memo={};
    let count =(k)=>{
        if(k===2) return 2;
        if(k<=1) return 1;
        if(memo[k]) return memo[k]

        memo[k] =count(k-1)+count(k-2)
        return memo[k]

    }


    return count(n)
    
};