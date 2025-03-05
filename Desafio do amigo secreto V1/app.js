//O principal objetivo deste desafio é fortalecer suas // habilidades em lógica de programação. Aqui você deverá // desenvolver a lógica para resolver o problema.//Declarando avariavel onde vai adicionar os amigos soterados

let amigo = [];

//Adicionando ação ao botão
  function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomePessoa = inputAmigo.value;
  
 //Caso o campo esteja vazio a aplicação ira informa
    if(!nomePessoa) {
       alert("O campo está vázio, por favor digite um nome.");
    return;
    }

//adicionando o nome na lista
  amigo.push(nomePessoa);
  inputAmigo.value = "";  
  inputAmigo.focus();
  atualisarLista();
}

//limpamos o campo e adicionamos novos nomes na lista
  function atualisarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
  
  
  for (let i = 0; i < amigo.length; i++){
    let item = document.createElement("li");
    item.textContent= amigo[i];
    listaAmigos.appendChild(item);
  }}

  function sortearAmigo(){
    if (amigo.length === 0){
      alert("O campo está vázio, por favor digite um nome.");
    return;
  }


//Mecanimos para realizar sorteio.
  let sorteado = amigo[Math.floor(Math.random() * amigo.length)];
  let resultado = document.getElementById(`resultado`);
  resultado.innerHTML = (`O amigo sorte foi: "${sorteado}".`);

  //document.getElementById("sortearAmigo").disabled = true;
  //document.getElementById("recomecarSorteio").disabled = false;
  
}
  function recomecarSorteio(){
  
    if (amigo.length === 0){
      alert("O campo está vázio, por favor digite um nome.");
    return;
    }

  let listaAmigos = document.getElementById("listaAmigos");
  let resultado = document.getElementById("resultado");
  
  listaAmigos.innerHTML = ``;
  resultado.innerHTML = ``;  

  document.getElementById("sortearAmigo").disabled = true;
  //document.getElementById("recomecarSorteio").disabled = false;
  
  }

//V.2.1
/*

*Gabriel*

let participantes = [];
let nome = '';
function adicionarAmigo(){
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
}*/