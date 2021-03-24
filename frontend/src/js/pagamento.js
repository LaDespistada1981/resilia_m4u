let numCartao = document.getElementById('numCartao');
let nome = document.getElementById('nome');
let cvv = document.getElementById('cvv');
let validade = document.getElementById('validade');
let botaoPag = document.querySelector('.btn-pag');
let cadastra = document.getElementById('cadastra');
let bandeiras = document.getElementById('bandeiras')
let nomeImpresso = document.getElementById('nomeImpresso');


//Tratamento erros

botaoPag.addEventListener("click", ()=>{
    if (numCard == ""){
        numCartao.style.backgroundColor = "#E5E5E5"
        numCartao.placeholder = "Insira um número de cartão válido"
    }

    if (nome.value == ""){
        nome.style.backgroundColor = "#E5E5E5"
        nome.placeholder = "Insira um nome válido"
    }

    if (cvv.value == ""){
        cvv.style.backgroundColor = "#E5E5E5"
        cvv.placeholder = "Insira um CVV"
    }

    if (validade.value == ""){
        validade.style.backgroundColor = "#E5E5E5"
        validade.placeholder = "Insira uma data de expiração"
    }
})


var bandSelecionada = ""

botaoPag.addEventListener("click", ()=>{
    console.log(cadastra.checked)
})

//Seleção bandeira - bandSelecionada é a bandeira que vai para o banco


bandeiras.addEventListener("change", ()=>{
    bandSelecionada = bandeiras.value;
   
})


//Reaizar cadastro

cadastra.addEventListener("change", ()=>{
    //Função para mandar para o banco (ifzadas)
})


//Para o banco - botar dentro do sbmit

let numCard = numCartao.value; //Numcartão
let name = nome.value; //Nome
let expiration = (validade.value).replace("/",""); //Data de validade
let holder = nomeImpresso.value //holder
let brand = bandSelecionada; //brand//Submissão
console.log(brand)



const Card = {
    TYPE: Credit,
    BRAND: brand,
    HOLDER: holder,
    NUMBER: numCard
}