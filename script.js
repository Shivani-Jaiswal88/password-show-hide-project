const password = document.getElementById("password")
const eyebtn = document.getElementById("togglePasswordBtn")

eyebtn.addEventListener("click", function(){
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
     eyeIcon.classList.toggle('fa-eye-slash');
})
