function digitalClock(second_full){
    let hour = Math.floor((second_full/60)/60)
    let minite = Math.floor(((second_full/60)/60)-hour)*60
    let second = Math.floor(((((second_full/60)/60)-hour)*60)- minite)*60
    let arr_digital = Array
    if(hour >= 24){
        if(hour % 10 != hour){
            arr_digital[0] = hour + " : "
        }else{
            arr_digital[0] = "0" + hour  + " : "
        }
    }
    if(minite % 10 != minite){
        arr_digital[1] =  " : "
    }else{
        arr_digital[1] = "0" + minite + " : "
    }
    if(second % 10 != second){
        arr_digital[2] = second 
    }else{
        arr_digital[2] = "0" + second
    }

    return arr_digital


}
console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))