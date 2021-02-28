function removeDups(arr_data){ 
    /* 
    let count = 0
    for(let i = 0 ; i < arr_data.length ; i++){
        for(let j = i+1; j < arr_data.length ; j++){
            if(arr_data[i] == arr_data[j]){
                count += 1
            }
        }
    }                  
    for(let del = 0 ; del < count ; del++){
        arr_data.pop()
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    return arr_data;
    */
   return Array.from(new Set(arr_data))
}



console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Tayor","John"]));