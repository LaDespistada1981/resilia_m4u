//Seleção de UF e DDD

var selectionUF = document.getElementById("uf");
var selectionDDD = document.getElementById("ddd");


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
    selectionDDD.innerHTML = ""
    for (let i = 0; i < keys.length; i++){
        if (selectionUF.value.toString() == keys[i]){
            let valuesPerUF = values[i]
                for (let j = 0; j < valuesPerUF.length; j++){
                    selectionDDD.innerHTML += (`<option> ${valuesPerUF[j]} </option>`)}
            
        }}  
})

//Pegar operadora 


var op= document.querySelectorAll('.op')
var selecioneOp = document.getElementById('selecione')
selecioneOp.addEventListener("change", () =>{
    var operadoraEscolhida = selecioneOp.value
    console.log(operadoraEscolhida)
})

//Tratamento erro

var botaoPag = document.getElementById('btnPag')
botaoPag.addEventListener("click", ()=>{
    if (selectionUF.value == "uf"){
        selectionUF.style.backgroundColor = "#E5E5E5"
        selectionUF.style.color = "red"
    }

    if (selectionDDD.value == "ddd"){
        selectionDDD.style.backgroundColor = "#E5E5E5"
        selectionDDD.style.color = "red"
    }

    if (selecioneOp.value == "operadora"){
        selecioneOp.style.backgroundColor = "#E5E5E5"
        selecioneOp.style.color = "red"
    }
})