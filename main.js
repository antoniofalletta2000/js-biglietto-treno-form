const formEl = document.querySelector("form")
console.log(formEl);

let nameSurname = document.getElementById("nome_cognome")
/* console.log(nameSurname); */
let kilometers = document.getElementById("km")
/* console.log(Kilometers); */
let ageEl = document.getElementById("age")
/* console.log(ageEl); */
let buttonGen = document.querySelector(".btn_generate")
/* console.log(buttonGen); */
let buttonStop = document.querySelector(".btn_stop")
/* console.log(buttonStop); */
let totalPrice = document.getElementById("total")

let nameTicket= document.getElementById("name_ticket")


formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(nameSurname.value);
    console.log(kilometers.value)
    nameTicket.innerHTML=nameSurname.value
    let discount = 0
    let kmValue = parseInt(kilometers.value)
    let price = (kmValue * 0.21)
    if (ageEl.value==="minor") {
        discount = .20
    } else if (ageEl.value==="over65") {
        discount = .40
    } else {
        discount = 0
    }
    total = (price - (price * discount))
    console.log(total.toFixed(2));
    totalPrice.innerHTML=total.toFixed(2)
})

buttonStop.addEventListener("click", (event) => {
    event.preventDefault()
    nameSurname.value=" "
    kilometers.value=" "
    nameTicket.innerHTML="xxxxx xxxxx"
    totalPrice.innerHTML="0000"
    console.log(totalPrice);
    
})
