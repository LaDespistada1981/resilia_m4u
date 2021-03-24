const email = document.getElementById('email');
const senha = document.getElementById('password');
const submit = document.getElementById('submit');
const emailValue = email.value;
const password = senha.value;

submit.addEventListener("click", ()=>{
const pessoa = {
    email: emailValue,
    password: password
}

    if (pessoa.email == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
        if (pessoa.password == ""){
        senha.placeholder = "Por favor, insira a senha"
        senha.style.backgroundColor = "#E5E5E5"
    }}

    else{
        requisition("http://immense-plains-98224.herokuapp.com/user/login", pessoa)
    }

    
})


const requisition = (url, pessoa) =>{

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pessoa)
  }) 
    .then((response) => console.log(response))
    .catch((error) => {
      console.error("Error:", error)
    })
  }



