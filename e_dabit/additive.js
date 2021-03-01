function additivePersistence(num,count=1){
    let arr_sum = num.toString().split('').map((i)=>parseInt(i));
    console.log(arr_sum);
    let sum = arr_sum.reduce((a,b)=>a+b);
    if(sum.toString().length > 1){
        count++
        return additivePersistence(sum,count);
    }
    else return count
}

console.log(additivePersistence(16795356223409876543212455667788999990336577989062683n));


