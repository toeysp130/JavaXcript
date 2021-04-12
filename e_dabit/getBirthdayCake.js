function getBirthdayCake(srt_name,year){
    let arr_dis = [];
    arr_dis[0] = "";
    arr_dis[1] = "";
    arr_dis[2] = "";
    if(year%2==0){
        for(let i =0 ; i < year ; i++){
            arr_dis[0] += "#";
            arr_dis[2] += "#";
        }
    }else{
        for(let i =0 ; i < year ; i++){
            arr_dis[0] += "*";
            arr_dis[2] += "*";
        }
    }
    arr_dis[1] = srt_name;
    return arr_dis;
}
console.log(getBirthdayCake("Jack",10)); 