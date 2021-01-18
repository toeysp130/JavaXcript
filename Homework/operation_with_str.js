function ck_operation(opr){
    var group_opr = "";
    let temp = "";
    for(let a = 0 ; a < opr.length + 1 ;a++){  //forนี้ใช้ถึงตัวดำเนินการ
        if(opr.charAt(a) == "+"){
            group_opr += "+";
        }
        else if(opr.charAt(a) == "-"){
            group_opr += "-";
        }
        else if(opr.charAt(a) == "*"){
            group_opr += "*";
        }
        else if(opr.charAt(a) == "/"){
            group_opr += "/";
        }
        else{
            //console.log("fail at fn ck_operation")
        }
    }
    //console.log("before rank " + group_opr);
    for(let rank = 0 ; rank < group_opr.length ;rank++){ //ใช้เรียงลำดับความสำคัญของตัวดำเนินการ
        if((group_opr.charAt(rank) == "+" && group_opr.charAt(rank+1) == "*" ) || (group_opr.charAt(rank) == "-" && group_opr.charAt(rank+1) == "*")){
            group_opr = swift(group_opr[rank],group_opr[rank+1]);
        }else if((group_opr.charAt(rank) == "+" && group_opr.charAt(rank+1) == "/" ) || (group_opr.charAt(rank) == "-" && group_opr.charAt(rank+1) == "/" )){
            group_opr = swift(group_opr[rank],group_opr[rank+1]);
        }else{
            //console.log("case ");
        }
    }
    //console.log("after rank " + group_opr);
    return(group_opr);
}
function swift(o1,o2){
    let temp = o2;
    o2 = o1;
    o1 = temp;
    return(o1+o2);
}

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
function calculate(number,operator){
    
    return(0);
}

function equation_str(str_get){
    let pull_opr = ck_operation(str_get);
    let pull_real_num = arr_real_num(str_get)
    console.log(pull_opr);
    console.log(pull_real_num);
    return(0);
}
equation_str("1+1+2");
//console.log("1+1 -> " + equation_str("1+1"))
//console.log("7*4-2 -> " + equation_str("7*4-2"));
//let fn = ck_number("4");
//console.log(fn);