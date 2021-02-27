function isValidIP(str_IP){
    let arr_IP = str_IP.split('.')
    //console.log(arr_IP)
    
    if(arr_IP.length != 4){
        return false
    }
    for(let i = 0; i < arr_IP.length ; i++){
        if(arr_IP[i][0] == '0'){
        return false
        }
    }

    for(let j = 0 ; j < arr_IP.length ; j++){
        if(parseInt(arr_IP[j]) > 255 ){
            return false
        }
    }

    return true
}

console.log(isValidIP('1.2.3.4'))
console.log(isValidIP('1.2.3.9.0.5'))
console.log(isValidIP('1.2.3.4.5'))
console.log(isValidIP('123.45.67.89'))
console.log(isValidIP('123.456.78.90'))
console.log(isValidIP('123.045.067.089'))