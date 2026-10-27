const inputCep = document.querySelector("#cep")
const inputLogradouro = document.querySelector("#logradouro")
const inputComplemento = document.querySelector("#complemento")
const inputNumero = document.querySelector("#numero")
const inputBairro = document.querySelector("#bairro")
const inputCidade = document.querySelector("#cidade")
const inputEstado = document.querySelector("#estado")

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

        console.log(json)

        inputCep.value = json.cep
        inputLogradouro.value = json.logradouro
        inputComplemento.value = json.complemento
        inputBairro.value = json.bairro
        inputCidade.value = json.localidade
        inputEstado.value = json.uf
    }
}
