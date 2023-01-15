function isValid(s: string): boolean {
    if(s.length%2!=0) return false 
    let stack=[];
    for (let i=0;i<s.length;i++){

        if (s[i]==='('||s[i]==='[' ||s[i]==='{'){
            stack.push(s[i])

        }else if(s[i]===']'&& stack[stack.length-1]==='['
        ||s[i]===')'&& stack[stack.length-1]==='('
        ||s[i]==='}'&& stack[stack.length-1]==='{')
        {
            stack.pop()
        }else{
            return false
        }
    }

    return stack.length>0?false:true
};