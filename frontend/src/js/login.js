const email = document.getElementById('email');
const senha = document.getElementById('password');
const submit = document.getElementById('submit');
const emailValue = email.value;
const password = senha.value;

submit.addEventListener("click", ()=>{
const pessoa = {
    EMAIL: emailValue,
    PASSWORD: password
}

    if (pessoa.EMAIL == ""){
        email.placeholder = "Por favor, insira um email"
        email.style.backgroundColor = "#E5E5E5"
        if (pessoa.PASSWORD == ""){
        senha.placeholder = "Por favor, insira a senha"
        senha.style.backgroundColor = "#E5E5E5"
    }}

    else{
        requisition("http://immense-plains-98224.herokuapp.com/user/login", pessoa)
    }

    
})


const requisition =  async (url, pessoa) =>{

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    
      body: JSON.stringify(pessoa)
    }) 
    
      .then((response) =>  console.log(response) /* {return response} */)
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
    
    }




