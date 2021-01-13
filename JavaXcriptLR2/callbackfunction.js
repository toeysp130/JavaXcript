function createQuote(qoute,callback){
    let myQuote = "Like I always say, " + qoute;
    callback(myQuote); //2

}

function logQuote(quote){
    console.log(quote + 'Yess..');
}

createQuote(" you will getting better!", logQuote);