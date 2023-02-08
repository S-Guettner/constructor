class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    info(){
        return `${this.name} is ${this.age} years old. `
    }
}

const person = new Person("Sven",29)
console.log(person)
const personInfo = person.info()
console.log(personInfo)