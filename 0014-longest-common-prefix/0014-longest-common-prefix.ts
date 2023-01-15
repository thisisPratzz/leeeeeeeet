function longestCommonPrefix(strs: string[]): string {

    let str ="";
    if(strs.length<1) return "";
    if(strs.length===1) return strs[0];

    const firstWord =strs.sort((a,b)=>a.length-b.length)[0];
    // console.log(firstWord)
    for(let m=0;m<firstWord.length;m++)
    {
        let flag =false;
        for (let i=1;i<strs.length;i++){
            const curr =strs[i]
            if(firstWord[m]===curr[m]){
                flag=true;
            }else{
                flag=false;
                return str;
            }
        }
        
        // console.log("flag:"+flag)
        if(flag){str+=firstWord[m]
        flag=false}else{
            return str
        }

}
    return str;
};