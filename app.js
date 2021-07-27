const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e =>{
e.preventDefault();

hideError(name);
hideError(email);
hideError(password);

//get value after trim()
const nameValue = name.value.trim(); 
const emailValue = email.value.trim(); 
const passwordValue = password.value.trim();

if( nameValue && emailValue && passwordValue){
    if(passwordValue.length < 6){
        showError(password, "passeord should be min 6 char!");
        return;
    }
        console.log(nameValue, emailValue, passwordValue);
        alert("thank you for joining us!")
    

}else{
    switch(""){
        case nameValue:
            showError(name, "please enter your name")
            case emailValue:
            showError(email, "please enter your email")
            case passwordValue:
            showError(password, "please enter your password")

    }   
}

})

function showError(input, message){
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector('.error-msg')
    formControl.className = "form-control error"
    errorMsg.innerText = message;
}

function hideError(input, message){
    const formControl = input.parentElement;
    const errorMsg = formControl.querySelector('.error-msg')
    formControl.className = "form-control "
    errorMsg.innerText = "";
}