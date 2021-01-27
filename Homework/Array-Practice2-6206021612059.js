let value1 = ['Apple',1,false];
let value2 = ['Frise',2,true];
let value3 = ['Mars',9,'Apple'];

    function compareArray(value1,value2,value3){
        let a1 = (typeof value1[0]==typeof value2[0]);
        let a2 = (typeof value1[1]==typeof value2[1]);
        let a3 = (typeof value1[2]==typeof value2[2]);
        let a4 = (typeof value2[0]==typeof value3[0]);
        let a5 = (typeof value2[1]==typeof value3[1]);
        let a6 = (typeof value2[2]==typeof value3[2]);
        let a7 = (typeof value1[0]==typeof value3[0]);
        let a8 = (typeof value1[1]==typeof value3[1]);
        let a9 = (typeof value1[2]==typeof value3[2]);
        return(a1 + "\t" + a2 + "\t" + a3 + "\n" + a4 + "\t" + a5 + "\t" + a6 + "\n" + a7 + "\t" + a8 + "\t" + a9 )
    }
    console.log(compareArray(value1,value2,value3));