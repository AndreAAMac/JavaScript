 //Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

 //Evento
input.addEventListener('keyup', enter);

 //Função
function enter(e) {
    if (e.key === 'Enter') {        
        const newLi = document.createElement('li');
        //pegar no que digitou no input 
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);
        //zerar o campo
        input.value = '';
        
}}

