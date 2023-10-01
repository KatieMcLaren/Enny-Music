"use strict";
//FORM VARIABLE AND FUNCTIONS
let fNameInput = document.getElementById("fname");
let lNameInput = document.getElementById("lname");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let phoneCheck = document.getElementById("prefPhone");
let textCheck = document.getElementById("prefText");
let emailCheck = document.getElementById("prefEmail");
let commentInput = document.getElementById("commentBox");
let validSpan = document.getElementById("formInputValid");

let fNameSpan = document.getElementById("fNameError");
let lNameSpan = document.getElementById("lNameError");
let emailSpan = document.getElementById("emailError");
let phoneSpan = document.getElementById("phoneError");
let checkedSpan = document.getElementById("checkedError");
let commentSpan = document.getElementById("commentError");

function validateForm(e){
    e.preventDefault();

    validSpan.innerHTML = "";

    fNameSpan.classList.remove("error");
    lNameSpan.classList.remove("error");
    emailSpan.classList.remove("error");
    phoneSpan.classList.remove("error");
    let isValid = false;
    let customer = {};

    if(fNameInput.value === ""){
        fNameSpan.classList.remove("hidden");
        fNameSpan.classList.add("error");
        isValid = false;
    }else{
        isValid = true;
        fNameSpan.classList.add("hidden");
        customer.firstName = fNameInput.value;
    }
    if(lNameInput.value === ""){
        lNameSpan.classList.remove("hidden");
        lNameSpan.classList.add("error");
        isValid = false;
    }else{
        isValid = true;
        lNameSpan.classList.add("hidden");
        customer.lastName = lNameInput.value;
    }
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if(emailInput.value === "" || !(emailRegex.test(emailInput.value))){
        emailSpan.classList.remove("hidden");
        emailSpan.classList.add("error");
        isValid = false;
    }else{
        isValid = true;
        emailSpan.classList.add("hidden");
        customer.email = emailInput.value;
    }
    let phoneRegex = /^(1-)?\d{3}-\d{3}-\d{4}$/;
    if(phoneInput.value === "" || !(phoneRegex.test(phoneInput.value))){
        phoneSpan.classList.remove("hidden");
        phoneSpan.classList.add("error");
        isValid = false;
    }else{
        isValid = true;
        phoneSpan.classList.add("hidden");
        customer.phone = phoneInput.value;
    }
    // if(!(phoneCheck.checked) || !(textCheck.checked) || !(emailCheck.checked)){
    //     checkedSpan.classList.remove("hidden");
    //     checkedSpan.classList.add("error");
    //     isValid = false;
    // }else{
    //     checkedSpan.classList.add("hidden");
    // }
    if(commentInput.value === ""){
        commentSpan.classList.remove("hidden");
        commentSpan.classList.add("error");
        isValid = false;
    }else{
        commentSpan.classList.add("hidden");
        customer.comment = commentInput.value;
        isValid= true;
    }
    if(isValid){
        validSpan.classList.remove("hidden");
        validSpan.innerHTML = `Thank you ${customer.firstName} ${customer.lastName} for joining the monthly newsletter`;
        fNameInput.value= "";
        lNameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        commentInput.value = "";
    }
}
//DARK MODE FUNCTION
function changeMode(){
    let pageFoot = document.querySelector("footer");
    let musicSection = document.getElementById("music");
    let contactSection = document.getElementById("contactus");
    pageFoot.classList.toggle("darkMode");
    musicSection.classList.toggle("darkMode");
    contactSection.classList.toggle("darkMode");
}
//GUESSING GAME FUNCTIONS
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}
function numberGame(e){
    e.preventDefault();

    let messageSpan = document.getElementById("gameSpan");
    let userInput = document.getElementById("gameGuess");
    let randomNum = getRandomNumber(1,10);
    let gameRegex = /^(?:[1-9]|0[1-9]|10)$/;
    
    if(userInput.value === ""){
        messageSpan.innerHTML = "Please enter valid number";
    }else if(!(gameRegex.test(userInput.value))){
        messageSpan.innerHTML = "Please enter valid number";
    }else if(userInput.value == randomNum){
        messageSpan.innerHTML = "You're our lucky winner!";
    }else{
        messageSpan.innerHTML = "Sorry, try again next time.";
    }
    userInput.value = "";
}
function newGuess(){
    let messageSpan = document.getElementById("gameSpan");
    messageSpan.innerHTML = "";
}
//PRODUCT CARDS FUNCTIONS
function prodOneFocus(){
    let prodOneCard = document.getElementById("productOne");
    let prodTwoCard = document.getElementById("productTwo");
    let prodThreeCard = document.getElementById("productThree");
    
    prodOneCard.classList.remove("hidden");
    prodTwoCard.classList.add("hidden");
    prodThreeCard.classList.add("hidden");
}
function prodTwoFocus(){
    let prodOneCard = document.getElementById("productOne");
    let prodTwoCard = document.getElementById("productTwo");
    let prodThreeCard = document.getElementById("productThree");

    prodTwoCard.classList.remove("hidden");
    prodOneCard.classList.add("hidden");
    prodThreeCard.classList.add("hidden");
}
function prodThreeFocus(){
    let prodOneCard = document.getElementById("productOne");
    let prodTwoCard = document.getElementById("productTwo");
    let prodThreeCard = document.getElementById("productThree");

    prodThreeCard.classList.remove("hidden");
    prodTwoCard.classList.add("hidden");
    prodOneCard.classList.add("hidden");
}

//Event-Listeners Area---------------------------------------------------------

document.getElementById("submitForm").addEventListener("click", validateForm);
document.getElementById("darkInput").addEventListener("click", changeMode);
document.getElementById("gameSubmit").addEventListener("click", numberGame);
document.getElementById("gameGuess").addEventListener("focus", newGuess);

document.getElementById("prodLinkOne").addEventListener("click",prodOneFocus);
document.getElementById("prodLinkTwo").addEventListener("click",prodTwoFocus);
document.getElementById("prodLinkThree").addEventListener("click",prodThreeFocus);
