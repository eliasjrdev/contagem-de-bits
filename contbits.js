let v1 = document.querySelector('#num');
let botao1 = document.querySelector('#sub');
let botao2 = document.querySelector('#reset');
let resposta = document.querySelector('.res');

botao1.addEventListener('click', rodar);
botao2.addEventListener('click', apagar);

function rodar(){
    let v3 = parseInt(v1);
    let bin = v3.toString(2);
    resposta.style.display = 'flex';
    resposta.innerHTML = bin.value
}

function apagar(){
    v1.value = '';
    resposta.innerHTML = '';
}