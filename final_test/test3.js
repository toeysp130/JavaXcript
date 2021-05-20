function missingLetter(str){
    let lost_word = "No Missing Letter"
    for(let i = 0 ; i < str.length ; i++){
        let def = str.charCodeAt(i+1) - str.charCodeAt(i)
        if(def > 1){
            lost_word = String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return lost_word

}
console.log(missingLetter("abdefg"));
console.log(missingLetter("mnopqs"));
console.log(missingLetter("tuvxyz"));
console.log(missingLetter("ghijklmno"));