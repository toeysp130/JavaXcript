function getDays(d1,d2){
    let d1_format = new Date(d1)
    let d2_format = new Date(d2)
    let diff = d2_format.getTime() - d1_format.getTime();   
    
    return  diff / (1000 * 60 * 60 * 24); 

    
      
}
console.log(getDays("June-14-2019","June 20,2019"));
console.log(getDays("December-29-2018","January 1,2019"));
console.log(getDays("July-20-2019","July 30,2019"));
