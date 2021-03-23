const email = document.getElementById('email');
const senha = document.getElementById('password');
const submit = document.getElementById('submit');
const emailValue = email.value;
const password = senha.value;

submit.addEventListener("click", ()=>{
    if (emailValue == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
    }

    if (password == ""){
        senha.placeholder = "Por favor, insira a senha"
        senha.style.backgroundColor = "#E5E5E5"
    }
})
