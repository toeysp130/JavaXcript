function capToFront(msg){
    let arr_msg = Array.from(msg)
    let cng_posi_upper = []
    let after_upper = []
    
    for(let i = 0 ; i < arr_msg.length;i++){
        if(arr_msg[i] == arr_msg[i].toUpperCase()){
            cng_posi_upper.push(arr_msg[i])
        }
        else
            after_upper.push(arr_msg[i])
    }
    
    cng_posi_upper += "," + after_upper
    
    //console.log(cng_posi_upper)
    return cng_posi_upper
}

console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))