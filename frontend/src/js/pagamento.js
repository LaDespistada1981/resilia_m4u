let divPg = document.getElementById('payments');
let divForm = document.getElementById('contentForme');
let divNome = document.getElementById('contentNome');
let divcheck = document.getElementById('seCad');
let numCartao = document.getElementById('numCartao');
let nome = document.getElementById('nome');
let cvv = document.getElementById('cvv');
let validade = document.getElementById('validade');
let botaoPag = document.querySelector('.btn-pag');
let cadastra = document.getElementById('cadastra')

//Para o banco

let numCard = numCartao.value;
let name = nome.value;
let expiration = validade.value;

botaoPag.addEventListener("click", ()=>{
    divPg.innerHTML = "<br><center>Pagamento efetuado com sucesso!</center>"
    divForm.innerHTML = '<br>'
    divNome.innerHTML = '<br>'
    cadastra.innerHTML = '<br>'
    divcheck.innerHTML = '<br>'
    botaoPag.innerHTML = "<center><a href='../../index.html'>Home</a></center>"
     

});

//Tratamento erros

// botaoPag.addEventListener("click", ()=>{
//     if (numCard == ""){
//         numCartao.style.backgroundColor = "#E5E5E5"
//         numCartao.placeholder = "Insira um número de cartão válido"
//     }

//     if (nome.value == ""){
//         nome.style.backgroundColor = "#E5E5E5"
//         nome.placeholder = "Insira um nome válido"
//     }

//     if (cvv.value == ""){
//         cvv.style.backgroundColor = "#E5E5E5"
//         cvv.placeholder = "Insira um CVV"
//     }

//     if (validade.value == ""){
//         validade.style.backgroundColor = "#E5E5E5"
//         validade.placeholder = "Insira uma data de expiração"
//     }
// })


// //Reaizar cadastro

// cadastra.addEventListener("change", ()=>{
//     console.log("Cadastra")
// })

