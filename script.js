"use strict";

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

function changeMode(){
    let pageFoot = document.querySelector("footer");
    let musicSection = document.getElementById("music");
    let contactSection = document.getElementById("contactus");
    pageFoot.classList.toggle("darkMode");
    musicSection.classList.toggle("darkMode");
    contactSection.classList.toggle("darkMode");
}





//Event-Listeners Area---------------------------------------------------------

document.getElementById("submitForm").addEventListener("click", validateForm);
document.getElementById("darkInput").addEventListener("click", changeMode);
