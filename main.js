var input =document.querySelector("input")
var message = document.querySelector(".message")
var show = document.querySelector("span")

var strongPassword =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
var midPassword =/ ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/
var weakPassword =/[a-z]/

function run(){
    if((input.value.length <5)||(input.value.match(weakPassword))){
        message.textContent='Your password is too weak'
        input.style.borderColor='red'
        message.style.color = "red"
    }
    if((input.value.length >5)&&(input.value.match(midPassword))){
        message.textContent='Your password is miduem'
        input.style.borderColor='blueviolet'
        message.style.color = "blueviolet"
    }
    if((input.value.length >8)&&(input.value.match(strongPassword))){
        message.textContent='Your password is strong'
        input.style.borderColor='blue'
        message.style.color='black'
        
    }
}