function twoSum(nums: number[], target: number): number[] {
    // let ans:Array<number> =[]; 
    // const myMap = new Map(nums.map((obj,index) => [obj, index]))
    //     // console.table(myMap)
    // nums.every((number,index)=>{
    //     //  if(ans.length) return true;    
   
    //     // const secondIndex =nums.findIndex((numb)=>{return numb===target-number})
    //     const secondIndex =myMap.get(target-number)
    //     console.table({number,index,secondIndex})
    //     if(index!==secondIndex){
    //     if(secondIndex>-1){
    //         ans[0]=index;
    //         ans[1]=secondIndex;
    //         return true
    //     }else{
    //         return false
    //     }
    //     }else{
    //        return true

    //     }
    // })
    // return ans;
    let map ={};
    for(let i=0;i<nums.length;i++){
        let diff =target-nums[i];


        if (diff in map) return [i,map[diff]];
        map[nums[i]]=i

    }

};