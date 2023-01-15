/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBuyPrice=prices[0]
    let maxProfit =0;

    for (i=1;i<prices.length;i++){
        let sellPrice = prices[i]
        let profit = sellPrice-minBuyPrice 

        maxProfit = Math.max(profit,maxProfit);

        minBuyPrice=Math.min(minBuyPrice,prices[i])
    }
    return maxProfit








    // let len =prices.length;
    // let b= prices[0];
    // let bindex =0,sindex=0;
    //             let s=b

    // for (i=1;i<prices.length;i++){
    //     if(prices[i]<b) //[7,6,4,3,1]
    //                     //
    //     {
    //         bindex=i;
    //         b=prices[i]
    //         s=b
    //     }
    //     console.log(prices[i],{s})
    //     if(prices[i]>s && s>b)
    //     {
    //         sindex=i
    //         s=prices[i]
    //     }

    //     console.log({bindex,b,sindex,s})
    // }

    // console.log(b==prices[len])
    // // if(b==prices[len]){
    // //     return 0
    // // }

    // // let s=b
    // // for (i=bindex;i<len;i++){
        
    // //     if(prices[i]>s){
    // //         s=prices[i]
    // //     }
    // // }
    // if(s<b)return s-b-1
    // else return 0
    
};

/*

[7,1,5,3,6,4] 
        l end 



[7,6,4,3,1]


*/