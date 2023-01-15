function romanToInt(s: string): number {
    let result =0;
    const map={'I':1,
        'V':             5,
'X':             10,
'L':             50,
'C':             100,
'D':             500,
'M':             1000,
    }
    for (let i =0;i<s.length;i++)
    {
        const curr = map[s[i]]
        const next = map[s[i+1]]
        // "LVIII"
        //  L50 >V5
        if(curr<next)
        {
            result+=next-curr;
            i++;
        }else{
            result+=curr
        }


    }


return result
};