function sumTwoSmallestNums (arr_num){
    /* วิธี menual
    for(let i = 0 ; i < arr_num.length ; i++){
        for(let j = i +1 ; j < arr_num.length ; j++){
            if(arr_num[i] > arr_num[j]){
                let swift = arr_num[i]
                arr_num[i] = arr_num[j]
                arr_num[j] = swift
            }
        }
    }
    
    for(let t  = 0 ; t < arr_num.length ; t++ ){
        if(arr_num[t] > 0){
            return (arr_num[t] + arr_num[t+1])
            
        }
    }
    */
    //วิธีลัด****
    console.log(arr_num);
   arr_num.sort((a,b)=>a-b) 
   console.log(arr_num);
   let posi_num = arr_num.filter((value)=>{return value>0})
   console.log(posi_num);
   //return posi_num[0]+posi_num[1]

   /* วิธี menual ที่สอง
    for(let i = 0 ; i < arr_num.length ; i++){
        if(arr_num[i] > 0){
            return (arr_num[i] + arr_num[i+1])
        }
    }
    */

}
// เอาจำนวนที่น้อยสุดสองจำนวนมาบวกกัน
//console.log (sumTwoSmallestNums([19,5,42,2,77]))
//console.log (sumTwoSmallestNums([10,343445353,3453445,3453545353453]))
console.log (sumTwoSmallestNums([2,9,6,-1]))
//console.log (sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587])); 
//console.log (sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]))