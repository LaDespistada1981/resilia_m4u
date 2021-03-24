const email1 = document.getElementById('email');
const senha1 = document.getElementById('password');
const submit = document.getElementById('submit');
const head = document.getElementsByTagName('head')
var body = document.getElementsByTagName('body')
/* const emailValue = email.value;
const password = senha.value; */


submit.addEventListener("click", ()=>{
const pessoa = {
    email: email1.value,
    password: senha1.value
}

    if (pessoa.email == ""){
        email1.placeholder = "Por favor, insira um email"
        email1.style.backgroundColor = "#E5E5E5"
        if (pessoa.password == ""){
          senha1.placeholder = "Por favor, insira a senha"
          senha1.style.backgroundColor = "#E5E5E5"
    }}

    else{
      window.location.href = "../pages/chip.html"
}})


const requisition = (url, pessoa) =>{

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pessoa)
  }) 
    .then((response) => {
    console.log(response)
    if(response.status == 200){
      requisition2(`http://immense-plains-98224.herokuapp.com/user/:${pessoa.email}`, pessoa)
    }})
    .catch((error) => {
      console.error("Error:", error)
    })
  }

const init = ()=>{
  console.log("Oi, eu vou manipular o DOM")
}

const updateLocalStorage = () =>{
  localStorage.setItem('usu', JSON.stringify(usu))
}

const localStorageUsu = JSON.parse(localStorage
  .getItem('usu'))
let usu = localStorage
  .getItem('usu') !== null ? localStorageUsu : []

const removeUsu = (ID) => {
  usu = usu.filter(usu => usu.id != ID)
  init()
}



const requisition2 = (url, pessoa) =>{

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  /*   body: JSON.stringify(pessoa) */
  }) 
    .then((response) => console.log(response.json()))
    .catch((error) => {
      console.error("Error:", error)
    })
  }