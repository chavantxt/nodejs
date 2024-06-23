const add=require('./add')
require('./batman')
require('./superhero')

const sum=add(1,2);
const sum2=add(5,3);
console.log(sum2);

const su=require("./superhero") 

console.log(su.getName());