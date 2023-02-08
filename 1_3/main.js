class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    info(){
        return `${this.name} is ${this.age} years old. `
    }
    write(){
        document.querySelector("#result").innerHTML = `${this.name} is ${this.age} years old. `
    }
}

const button = document.querySelector("#button").addEventListener('click', () =>{
    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const examCheck = document.querySelector("#examCheck")
    const result = document.querySelector("#result")
    examCheck.checked ? result.style.color="green" : result.style.color="red"
    const newPerson = new Person(name,age)
    newPerson.write()
})

