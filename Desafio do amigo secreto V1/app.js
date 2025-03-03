//O principal objetivo deste desafio é fortalecer suas 
// habilidades em lógica de programação. Aqui você deverá 
// desenvolver a lógica para resolver o problema.

//Laço de repetição


//Variavel que vai recebe os dados para faze o sorteio.
/*function adicionarAmigo(){
    let amigo =document.querySelector('input').value;
    
}*/

//let campooParaSorteio = prompt  ("Teste");

let participantes = [];
let nome = '';
function adicionarAmigo() 
{
    nome = document.getElementById("amigo").value;
    if (nome != '') 
    {
    participantes.push(nome);
    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(li);
    //atualizarLista();
    nome = '';
    }
    
    console.log(`${nome} foi add! `); 
}
/*function atualizarLista()
{
  let lista = document.getElementById("");

}*/