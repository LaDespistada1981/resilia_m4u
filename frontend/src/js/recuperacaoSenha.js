let email = document.getElementById('email')
let novaSenha = document.getElementById('senha')
let confirmaNovaSenha = document.getElementById('confirmaSenha')
let submit = document.getElementById('submit')
let emailValue = email.value;
let password = novaSenha.value;
let confirmPassword = confirmaNovaSenha.value;

submit.addEventListener("click", ()=>{
    if (emailValue == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
    }

    if (password == ""){
        novaSenha.placeholder = "Por favor, insira a senha"
        novaSenha.style.backgroundColor = "#E5E5E5"
    }

    if (confirmPassword == ''){
        confirmaNovaSenha.placeholder = "Por favor, confirme a senha"
        confirmaNovaSenha.style.backgroundColor = "#E5E5E5"
    }

})



