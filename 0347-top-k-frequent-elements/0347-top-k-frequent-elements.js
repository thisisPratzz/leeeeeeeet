/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashMap ={}
    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]]){
            hashMap[nums[i]]+=1
        }else{
            hashMap[nums[i]]=1
        }
    }
    
    let sortable =[];
for(let  i in hashMap){
    sortable.push({key : i, value:hashMap[i]});
}

sortable.sort(function(a,b){
return a.value - b.value;
});

    

    sortable =sortable.slice(sortable.length-k,sortable.length)
        // console.log("sliced",sortable)

    return sortable.map((a)=>a.key)
};