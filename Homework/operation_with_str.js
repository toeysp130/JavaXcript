function arr_real_num(str_num){
    
    let arr_num = {}; //Array ที่ดึงตัวเลขออกมา
    for(let count = 0 ; count < str_num.length; count++){ //ใช้วนดึงตัวเลขมาแปลงเป็น int และนำค่าเข้า array
        if(arr_num[count] == null){
            arr_num[count] = parseInt(str_num[count]);
            //console.log("เข้าถึงนี่แล้ว");
        }
        else{
            //console.log("ไม่เข้าเงื่อนไขบน");
        }
    }
    //console.log(arr_num);
    return(arr_num);
}
function arr_cut_opr(str_num){
    let arr_opr = str_num; //Array ที่ดึงตัวเลขออกมา
    for(let count = 0 ; count < str_num.length; count++){ //ใช้วนดึงตัวเลขมาแปลงเป็น int และนำค่าเข้า array
        if(arr_opr[count] == NaN){
            arr_opr[count] = str_num[count];
            console.log("เข้าถึงนี่แล้วเก็บตัวดำเนินการ");
        }
        else{
          //  console.log("ไม่เข้าเงื่อนไขบน");
        }
    }
    //console.log(arr_num);
    return(arr_opr);
}
function calculate(number,operator){
    let sum = 0;
    let posi_opr1 = operator.indexOf("+");
    let posi_opr2= operator.indexOf("-");
    let posi_opr3 = operator.indexOf("*");
    let posi_opr4 = operator.indexOf("/");
    for(let l = 0 ; l < operator.length ; l++){
            if(!true){
                if(operator[posi_opr3] == "*"){
                    sum = operator[posi_opr3-1] * operator[posi_opr3+1];
                    
                }else{
                    sum = operator[posi_opr4-1] / operator[posi_opr4+1];
                }
            }else{
                if(operator[posi_opr1] == "+"){
                    sum = parseInt(operator[posi_opr1-1]) + parseInt(operator[posi_opr1+1]);
                }else{
                    sum = operator[posi_opr2-1] - operator[posi_opr2+1];
                }
            } 
        }
    return(sum);
} 
  


function equation_str(str_get){
    let pull_real_num = arr_real_num(str_get);
    let pull_opr = arr_cut_opr(str_get);
    //console.log(pull_real_num);
    //console.log(pull_opr);
    let total = 0;
    total = calculate(pull_real_num,pull_opr);
    

    return(total);
}
//console.log("equation (+5) -> " + equation_str("5+5"));
console.log("1+1 -> " + equation_str("1+1"));
console.log("7*4-2 -> " + equation_str("7*4-2"));
console.log("1+1+1+1+1 -> " + equation_str("1+1+1+1+1"));
//let fn = ck_number("4");
//console.log(fn);