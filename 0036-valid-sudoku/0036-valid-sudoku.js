/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let i =0;i<9;i++){
                    let rows = new Set();
        for (let j=0;j<9;j++){

            const ele =board[i][j]
            if(rows.has(ele)){
                console.log("rows false")
                return false;
                break;
            }else {
                if(ele!==".")rows.add(ele)
            }
        }
    }
    
    
        for (let i =0;i<9;i++){
                        let rows = new Set();

        for (let j=0;j<9;j++){
            const ele =board[j][i]
            //  console.log("rows",rows)
            // console.log("ele",ele)      
            if(rows.has(ele)){
                                // console.log("cols false")
                return false;
                break;
            }else {
                if(ele!==".")rows.add(ele)
            }
         }
        }
    let start3x3= [
                    [0,0],[0,3],[0,6],
                  [3,0],[3,3],[3,6],
                   [6,0],[6,3],[6,6],
                  
                  ]
            let arr=[]
    for(let k=0;k<9;k++){
        arr.push(isValid(start3x3[k]))
        console.log(arr)

    }
      if(arr.indexOf(false)<0)return true
        else return false 
    function isValid(s){
        console.log({s})
        let m=s[0],n=s[1];
                    let rows = new Set();

        for (let i=0;i<3;i++){
              for (let j=0;j<3;j++){
            const ele =board[m+i][n+j]
            console.log("rows",rows)
            console.log("ele",ele)        
            if(rows.has(ele)){
                return false;
                // break;
            }else {
                if(ele!==".")rows.add(ele)
            }
        }
    }
        return true
    }
    
    
    return true;
    
};