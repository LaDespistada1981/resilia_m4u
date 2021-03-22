const operadoras = document.getElementById("selecione").selectedOptions[0].innerText
const logo = document.getElementById("logoOperadora")

console.log(logo)

function app(operadora) {
    if(operadora == "Oi") {
        logo.src = "../img/logo-oi.svg"
    } else if(operadora == "Tim") {
        logo.src = "../img/logo-tim.svg"
    }else if(operadora == "Claro") {
        logo.src = "../img/logo-claro.svg"
    }else if(operadora == "Vivo") {
        logo.src = "../img/logo-vivo.svg"
    }
}


operadoras.addEventListener("click", () => {
    logo.src = `../img/logo-${operadoras.toLowerCase()}.svg`
})