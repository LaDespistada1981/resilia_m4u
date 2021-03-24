//Pegando elementos
const checkCPF = document.getElementById('checkCpf');
const checkCNPJ = document.getElementById('checkCnpj');
const CPF = document.getElementById('cpf');
const CNPJ = document.getElementById('cnpj');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
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

//Permissões do formulário

submit.addEventListener("click", ()=>{  
var pessoa ={
cpf: CPF.value,
cnpj: CNPJ.value,
fullname: nome.value,
email: email.value,
password: password.value}

console.log(pessoa)

if (pessoa.fullname == ""){
    nome.placeholder = "Por favor, insira um nome"
    nome.style.backgroundColor = "#E5E5E5"
        if (pessoa.email == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
        if (pessoa.password == ""){
            password.placeholder = "Por favor, insira uma senha"
            password.style.backgroundColor = "#E5E5E5"
                if (confirmpassword.value== ""){
                confirmpassword.placeholder = "Por favor, confirme sua senha"
                confirmpassword.style.backgroundColor = "#E5E5E5"
                    if (pessoa.password !== password){
                    confirmpassword.placeholder = "Senhas não compatíveis"
                    confirmpassword.style.backgroundColor = "#E5E5E5"
}}}}
}

else{
requisition("http://immense-plains-98224.herokuapp.com/user/register", pessoa)}
})



//Cadastrar

const requisition = (url, pessoa) =>{

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pessoa)
    }) 
      .then((response) => console.log(response /* {return response} */))
      .catch((error) => {
        console.error("Error:", error)
      })
    }
    



 