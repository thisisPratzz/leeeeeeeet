/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false ;

    // words to key value pair 
    let sObj = keyvalue(s);
    let tObj = keyvalue(t);


    for (key in sObj){
        if(sObj[key]!==tObj[key]){
            return false
        }
    }

    function keyvalue (s){
            let sObj = {};
        for (i=0;i<s.length;i++){
        if(sObj[s[i]]){
            sObj[s[i]] +=1
        }else{
            sObj[s[i]] =1

        }
    }


        return sObj
    }

    return true
    
};