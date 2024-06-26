const add=require('./add')
require('./batman')
require('./superhero')

const sum=add(1,2);
const sum2=add(5,3);
console.log(sum2);

const su=require("./superhero") 

console.log(su.getName());

su.setName("Tejaswini")
console.log(su.getName()); //Tejaswini

const su2=require("./superhero")
console.log(su2.getName()) //Tejaswini

const math=require("./math")
console.log(math(2,7))

const math3=require("./math2")
console.log(add(3,3))