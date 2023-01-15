/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const hashMap ={}
    
    // console.log("testcase",strs.length)
    for (let i=0;i<strs.length;i++){
//         curr = strs[i];
//         for(j=0;j<curr.length;i++){
            
            
//         }
        // const obj =  keyvalue(strs[i])
        const StringfiyedObj =keyvalue(strs[i])
        // console.log(StringfiyedObj)
        if(hashMap[StringfiyedObj]){
            hashMap[StringfiyedObj].push(strs[i])
        }else {
            hashMap[StringfiyedObj] =[strs[i]]
        }
        
        
        
        
    }
    
    
    function keyvalue (s){
        // console.log(s,":",s.length)
            let sObj = {a:0,
                        b:0,
                        c:0,
                        d:0,
                        e:0,
                        f:0,
                        g:0,
                        h:0,
                        i:0,
                        j:0,
                        k:0,
                        l:0,
                        m:0,
                        n:0,
                        o:0,
                        p:0,
                        q:0,
                        r:0,
                        s:0,
                        t:0,
                        u:0,
                        v:0,
                        w:0,
                        x:0,
                        y:0,
                        z:0,
                        "":0
                       };
        for (let i=0;i<s.length;i++){
                    sObj[s[i]] +=1
        }
        // console.log(JSON.stringify(sObj))
        return JSON.stringify(sObj)
    }
    const arr =[]
    for (key in hashMap){
        arr.push(hashMap[key])
    }
    return arr
};