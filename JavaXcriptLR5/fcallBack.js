function callback(){
    console.log("Timeout Completed");

}
console.log('Start');
setTimeout(callback,30000);
console.log('End');