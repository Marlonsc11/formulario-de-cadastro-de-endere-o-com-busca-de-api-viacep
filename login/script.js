const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const BotaoEnviar = document.querySelector("#btn-enviar");

BotaoEnviar.addEventListener("click",login)

function login(event){
    event.preventDefault();
    console.log(inputEmail.value)
    console.log(inputSenha.value)
    
}

console.log(inputEmail)
console.log(inputSenha)
console.log(BotaoEnviar)