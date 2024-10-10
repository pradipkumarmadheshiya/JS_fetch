const name= document.getElementById("name")
const email= document.getElementById("email")
const password= document.getElementById("password")
const nameError= document.getElementById("nameError")
const emailError= document.getElementById("emailError")
const passwordError= document.getElementById("passwordError")
const submitForm= document.getElementById("submitForm")
const formSubmitted=document.getElementById("formSubmitted")

const validateForm=(event)=>{
    event.preventDefault()
    nameError.innerHTML=""
    emailError.innerHTML=""
    passwordError.innerHTML=""

    const nameValue=name.value.trim()
    const emailValue=email.value
    const passwordValue=password.value

    const nameRegex=/^[a-zA-Z]+$/;
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid=true

    if (!nameValue){
        nameError.textContent="Name field is required."
        isValid=false
    }
    else if (!nameRegex.test(nameValue)){
        nameError.textContent="Name must contain only alphabetic characters."
        isValid=false
    }

    if (!emailValue){
        emailError.textContent="Email field is required."
        isValid=false
    }
    else if (!emailRegex.test(emailValue)){
        emailError.textContent="Invalid email format."
        isValid=false
    }

    if (!passwordValue){
        passwordError.textContent="Passwordfield id required"
        isValid=false
    }
    else if (passwordValue.length<8){
        passwordError.textContent="Password must be atleast 8 characters long."
        isValid=false
    }
    
    if (isValid){
        formSubmitted.textContent="Form successfully submitted."
        name.value=""
        email.value=""
        password.value=""
    }
    else{
        formSubmitted.textContent=""
    }
}
submitForm.addEventListener("click", validateForm)