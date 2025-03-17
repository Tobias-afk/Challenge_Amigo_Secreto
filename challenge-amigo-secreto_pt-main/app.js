let listaAmigos = [];

function exibirLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let contador = 0; contador<listaAmigos.length; contador++){
        let novoItem = document.createElement('li');
        novoItem.textContent = listaAmigos[contador];
        lista.appendChild(novoItem);
    }
}

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo ==""){
        alert('Por favor, insira um nome');
    }
    else{
        listaAmigos.push(nomeAmigo);
        document.querySelector('input').value='';
        exibirLista();
        console.log(listaAmigos);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
    }
}
function sortearAmigo(){
    if (listaAmigos.length<1){
        alert('A lista está vazia, Por favor digite um nome');
    }
    else{
        let nomeSecreto = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = nomeSecreto;
        listaAmigos = [];
    }
}