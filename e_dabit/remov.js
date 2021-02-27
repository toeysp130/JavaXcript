function removeABC(str){
    if(str.match(/[abc]/)){
        str = str.replace(/[abc]/,' ')
    }
    return str
}
console.log(removeABC("Hello worlda"))