//Pegando elementos
const checkCPF = document.getElementById('checkCpf');
const checkCNPJ = document.getElementById('checkCnpj');
const CPF = document.getElementById('cpf');
const CNPJ = document.getElementById('cnpj');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submit = document.getElementById('submitButton')

//Filtrando pela seleção do tipo de pessoa 

checkCPF.addEventListener("focus", ()=>{
    checkCNPJ.checked = false;
    CPF.style.display = "block";
    CNPJ.style.display = "none";
    CNPJ.value = ""
})

checkCNPJ.addEventListener("focus", ()=>{
    checkCPF.checked = false;
    CPF.style.display = "none";
    CNPJ.style.display = "block";
    CPF.value = ""
})

//Valores dos inputs escritos para jogar no banco

let cpfValue = CPF.value;
let cnpjValue = CNPJ.value;
let nomeValue = nome.value;
let emailValue = email.value;
let passwordValue = password.value;
let confirmPasswordValue = confirmPassword.value;

//Permissões do formulário

submit.addEventListener("click", ()=>{
    if (nomeValue == ""){
        nome.placeholder = "Por favor, insira um nome"
        nome.style.backgroundColor = "#E5E5E5"
    }

    if (emailValue == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
    }

    if (passwordValue == ""){
        password.placeholder = "Por favor, insira uma senha"
        password.style.backgroundColor = "#E5E5E5"
    }

    if (confirmPasswordValue == ""){
        confirmPassword.placeholder = "Por favor, confirme sua senha"
        confirmPassword.style.backgroundColor = "#E5E5E5"
    }

    if (passwordValue !== password){
        confirmPassword.placeholder = "Senhas não compatíveis"
        confirmPassword.style.backgroundColor = "#E5E5E5"
    }
})




 