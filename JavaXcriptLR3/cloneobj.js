const obj1 = {
    person : 'Watcharakorn',
    weight : 55
}

//const obj2 = obj1;
//const obj2 = Object.assign({},obj1);
const obj2 = {...obj1};
obj2.weight = 73;
console.log(obj1);
console.log(obj2);