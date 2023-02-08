class PlayerCard {
    constructor(firstName,lastName,age,currentClub,netWorth,image){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.currentClub = currentClub
        this.netWorth = netWorth
        this.image = image
    }
    cardOutput(){
        document.querySelector("#firstNameOutput").innerHTML = this.firstName
        document.querySelector("#lastNameOutput").innerHTML = this.lastName
        document.querySelector("#ageOutput").innerHTML = this.age
        document.querySelector("#currentClubOutput").innerHTML = this.currentClub
        document.querySelector("#netWorthOutput").innerHTML = this.netWorth + "€"
        document.querySelector("#output").style.background=`url=('${this.image}')`
        console.log(this.image)
    }
}

document.querySelector("#button").addEventListener('click', () => {
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const age = document.querySelector("#age").value
    const currentClub = document.querySelector("#currentClub").value
    const netWorth = document.querySelector("#netWorth").value
    const image = document.querySelector("#imageURL").value
    const newCard = new PlayerCard(firstName,lastName,age,currentClub,netWorth,image)
    newCard.cardOutput()
})