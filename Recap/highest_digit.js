function highestDigit(num){
    /*
    let arr_num = Array.from(String(num))
    let max = 0
    for(let c = 0;c<arr_num.length;c++){
        if(arr_num[c]> max){
            max = arr_num[c]
        }
    }
    return max
    */
    

    let arr_num = Array.from(String(num))///เเปลงเป็นstrเเล้วเอาไปเก็บอาเรย์ทีละตัว
    arr_num.sort((a,b)=>b-a) ///เรียงแบบในตัวจากมากไปน้อย
    return arr_num[0] //returnตัวมากสุดที่อยู่ตัวเเรก
}
console.log(highestDigit(398))
console.log(highestDigit(34846))

//console.log(highestDigit(2))
//console.log(highestDigit(377401))