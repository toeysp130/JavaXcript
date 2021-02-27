function totalVolume(){
    let sum_plus_argu = 0
    for(let i = 0 ; i < arguments.length ; i++){
        let sum_mul_argu = 1
        for(let j = 0 ; j < arguments[i].length ; j++){
            sum_mul_argu *= arguments[i][j] 
        }
        sum_plus_argu += sum_mul_argu
    }

    return sum_plus_argu
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));
