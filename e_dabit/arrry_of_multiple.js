function arrayOfMultiples(num,length){
    let sum = Array()
    for(let i = 0 ;i < length ; i++){
        sum[i] = num*(i+1);
    }
    return sum
}

console.log(arrayOfMultiples(7,5))
console.log(arrayOfMultiples(12,10))
console.log(arrayOfMultiples(17,6))
