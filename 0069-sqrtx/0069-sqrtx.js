/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // if (x<=1) return x
    // if (x==2) return 1

    // for (let i=2;i<x;i++){
    //     if(i*i===x) return i
    //     if(i*i>x) return i-1
    // }
    //binary search approach 
    let i=0;
    let j=x


    while (i<j)
    {
        let middle = Math.ceil((i+j)/2)
        // console.log(middle)
        let square = middle **2
        if(square===x) return middle
        if(square<x){
            i=middle
        }else {
            j=middle-1
        }

    }
            return i

};