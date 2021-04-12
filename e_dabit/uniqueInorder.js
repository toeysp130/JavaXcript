function uniqueInorder(str){
    let str_to_arr = Array.from(str);
    let temp = [];
    for (const i of str_to_arr) {
        console.log("object");
        for(let j = i ; j<str_to_arr.length ; j++){
            if(str_to_arr[i] != str_to_arr[j]){
                temp.push(str_to_arr[i]);
                console.log("test");
            }    
        }
    }
    return temp;
}

console.log(uniqueInorder("AAAABBBCCDAABBB"));