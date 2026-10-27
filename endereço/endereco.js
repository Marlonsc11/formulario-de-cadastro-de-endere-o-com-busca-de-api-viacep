const inputCep = document.querySelector("#Cep")
const inputLogradouro = document.querySelector("#Logradouro")
const inputComplemento = document.querySelector("#Complemento")
const inputNumero = document.querySelector("#Numero")
const inputBairro = document.querySelector("#Bairro")
const inputCidade = document.querySelector("#Cidade")
const inputEstado = document.querySelector("#Estado")

const BotaoEnviar = document.querySelector("#btn-enviar")

BotaoEnviar.addEventListener("click",cadastrarendereco)

function cadastrarendereco(event){
    event.preventDefault();
    const json = {
        "cep" : inputCep.value,
        "logradouro" : inputLogradouro.value,
        "complemento" : inputComplemento.value,
        "numero" : inputNumero.value,
        "bairro" : inputBairro.value,
        "cidade" : inputCidade.value,
        "estado" : inputEstado.value
    }
    console.log("Meus dados do formulário:",json)
}
inputCep.addEventListener("change",buscarCep);

async function buscarCep(event){
    const Cep = event.target.value
    console.log(Cep.length)
    if(Cep.length == 8){
        
        const url = `https://viacep.com.br/ws/${Cep}/json`
        const response = await fetch(url)
        const json = await response.json(url)

        inputCep.value = json.Cep
        inputLogradouro.value = json.Logradouro
        inputComplemento.value = json.Complemento
        inputNumero.value = json.Número
        inputBairro.value = json.Bairro
        inputCidade.value = json.Cidade
        inputEstado.value = json.Estado
    }
}
