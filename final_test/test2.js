function numInStr(arr){
    let arr_number = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i].toString()
        for(let j = 0 ; j < check.length;j++){
            if(Number.isInteger(parseInt(check[j]))){
                count = 1;
            }
        }
        if(count == 1){
            arr_number.push(arr[i])
            count = 0
        }
    }
    return arr_number

}
//console.log(numInStr(["abc","abc10"]));
//console.log(numInStr(["abc","ab10c","a10bc","bcd"]));
//console.log(numInStr(["this is a test","test1"]));
console.log(numInStr(["1a","a","2b","b"]));




