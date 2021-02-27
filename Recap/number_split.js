function numberSplit(full_number){
    let one_round = full_number/2
    let arr_sum = Array
    if( full_number % 2  == 0){
        arr_sum = [one_round,one_round]
    }
    else{
        arr_sum = [Math.floor(one_round),Math.floor(one_round+1)]
    }
    return  arr_sum
}

console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))