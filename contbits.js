let v1 = document.querySelector('#num');
let botao1 = document.querySelector('#sub');
let botao2 = document.querySelector('#reset');
let resposta = document.querySelector('.res');

botao1.addEventListener('click', rodar);
botao2.addEventListener('click', apagar);

function rodar(){
    let deposito = 0
    let v3 = v1.value;
    let convert = (v3 >>> 0).toString(2)
    resposta.style.display = 'block';
    resposta.innerHTML = convert;
    let tam = convert.length
    for (var test = tam; tam === 1; deposito++ ){
        console.log(test)
    }
}

function apagar(){
    v1.value = '';
    resposta.innerHTML = '';
    resposta.style.display = 'none';
}

