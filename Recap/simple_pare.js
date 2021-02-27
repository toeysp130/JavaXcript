function simplePair(arr_num,num){
    let arr_sum = Array
    for(let i = 0 ; i < arr_num.length ; i++){
        for(let j = i+1 ; j < arr_num.length ; j++){
            if(arr_num[i] * arr_num[j] == num){
                arr_sum[0] = arr_num[i]
                arr_sum[1] = arr_num[j]   
            }
        }
    }
    return  arr_sum
}


console.log(simplePair([1,2,3],3))
console.log(simplePair([1,2,3],6))
console.log(simplePair([1,2,3],9))