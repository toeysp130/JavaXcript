function additivePersistence(num,count=1){
    let arr_sum = num.toString().split('').map((i)=>parseInt(i));
    let sum = arr_sum.reduce((a,b)=>a+b);
    if(sum.toString().length > 1){
        count++
        return additivePersistence(sum,count);
    }
    else return count
}

function sortdata(arr_num){
    return arr_num.sort((a,s)=>a-s)
}
console.log(additivePersistence(1679583));
console.log(sortdata([1,6,7,9,5,8,3]));


