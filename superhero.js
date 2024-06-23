class SuperHero{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    setName(){
        this.name = name;
    }
}

const superHero="SuperMan!"
console.log(superHero)
module.exports = new SuperHero("Batman")