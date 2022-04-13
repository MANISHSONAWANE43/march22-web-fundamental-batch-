const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)

buttonElement.addEventListener('click', buttonClick)

function buttonClick(){
    console.log("button is clicked")
}

function submitForm(tushar){
    virat.preventDefault()

    if(nameElement.value === "" || nameElement.value.includes("tushar") === true){
        console.log("Name is Empty")
        nameElement.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(email.value === ""){
        console.log("email is Empty")
        email.classList = "error"
    } // add else conditions

    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
        alert("password do not match.");
    }else

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
        check
    }
    //add check that password and confirm password should be same 

    if(password.value !== confirmPassword.value){
        console.log("confirm password is not the same as password")
        confirmPassword.classList = "error"
        password.classList = "error"
        }


       // add check that password should contain atleast on of the following

       // @, #, $
       
    const characters = ['@', '$', '#', "!", 'A', 'B']

     if(password.value.includes("@") === false || password.value.includes("$") === false){
         console.log("password does not contain @ or $")
     }

    }  
    
