//Seleção de UF e DDD

var selectionUF = document.getElementById("UF");
var selectionDDD = document.getElementById("DDD");


var dddsPorEstado = {
    "AC": ["68"],
    "AL": ["82"],
    "AM": ["92", "97"],
    "AP": ["96"],
    "BA": ["71", "73", "74", "75", "77"],
    "CE": ["85", "88"],
    "DF": ["61"],
    "ES": ["27", "28"],
    "GO": ["62", "64"],
    "MA": ["98", "99"],
    "MG": ["31", "32", "33", "34", "35", "37", "38"],
    "MS": ["67"],
    "MT": ["65", "66"],
    "PA": ["91", "93", "94"],
    "PB": ["83"],
    "PE": ["81", "87"],
    "PI": ["86", "89"],
    "PR": ["41", "42", "43", "44", "45", "46"],
    "RJ": ["21", "22", "24"],
    "RN": ["84"],
    "RO": ["69"],
    "RR": ["95"],
    "RS": ["51", "53", "54", "55"],
    "SC": ["47", "48", "49"],
    "SE": ["79"],
    "SP": ["11", "12", "13", "14", "15", "16", "17", "18", "19"],
    "TO": ["63"]
}


var keys = Object.keys(dddsPorEstado)
var values = Object.values(dddsPorEstado)

var geraUF = () =>{
    for (UF in keys){
        selectionUF.innerHTML += (`<option>${keys[UF]}</option>`)
    }
}

selectionUF.addEventListener("click", geraUF())

selectionUF.addEventListener("change", ()=>{
    for (let i = 0; i < keys.length; i++){
        if (selectionUF.value.toString() == keys[i]){
            let valuesPerUF = values[i]
                for (let j = 0; j < valuesPerUF.length; j++){
                    selectionDDD.innerHTML += (`<option> ${valuesPerUF[j]} </option>`)}
            
        }}  
})

//Soma dos valores da recarga

var mostraTotal = document.querySelector('.total')
var buttons = document.querySelectorAll('.btn-padrao')
var mostraTotal = document.querySelector('.total')
var valorNum = document.getElementById('valorNum')

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        var buttonValue = parseInt(button.value)
        valorNum.innerText = `${buttonValue}` 
    })
})

var button50 = document.querySelector('.btn-col4')
    button50.addEventListener("click", ()=>{
        var button50Value = parseInt(button50.value) 
        valorNum.innerText = `${button50Value}`      
})

var input = document.getElementById('valorRecarga');
input.addEventListener("keyup", ()=>{
    valorNum.innerText = `${input.value}`
})

//valorCompra vai ser o valor da compra que vai pro banco

var btnPagar = document.getElementById('pagar')
btnPagar.addEventListener("click", () =>{
    var valorCompra = parseInt(valorNum.innerText)
    console.log(valorCompra)
})

//Pegar operadora -- operadoraEscolhida é a operadora que vai pro banco


var op= document.querySelectorAll('.op')
var selecioneOp = document.getElementById('selecione')
selecioneOp.addEventListener("change", () =>{
    var operadoraEscolhida = selecioneOp.value
})

//Pega o numero do telefone - celularBanco é o int que vai para o banco

var inputTelefone = document.getElementById('telefone');
inputTelefone.addEventListener("keyup", () =>{
    var celular = `55${selectionDDD.value}${inputTelefone.value}`
    var celularBanco = parseInt(celular)
})


