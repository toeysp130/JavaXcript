function highestDigit(num){
    let arr_num = Array.from(String(num))
    let max = 0
    for(let c = 0;c<arr_num.length;c++){
        if(arr_num[c]> max){
            max = arr_num[c]
        }
    }
    return max
}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))