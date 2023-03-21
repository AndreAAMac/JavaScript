//Selecionar o nome da tag
document.getElementsByTagName("h1")
//-----------------------------------------------------------------------------------------
//Selecionar o id
document.getElementById('id')
//-----------------------------------------------------------------------------------------
//Selecionar classe
document.getElementsByClassName('botao')
//-----------------------------------------------------------------------------------------
//Generico para todos
document.querySelector("#id")
document.querySelector(".botao")
document.querySelector("h1")
//-----------------------------------------------------------------------------------------
//Selecionar so um item
//Retorna o elemento
document.querySelector("li")
//-----------------------------------------------------------------------------------------
//Selecionar todos 
//Sempre retorna um array
document.querySelectorAll("li")
//-----------------------------------------------------------------------------------------
//Selecionar itens especificos
document.querySelectorAll("#id ul li")

//-----------------------------------------------------------------------------------------

//EVENTOS DE CLIQUE

function clicou(){
    console.log('Clicou no botão!');
}

//Segundo botao
let botao = document.querySelector('.botao2');
botao.addEventListener('click', ()=>{
    clicou();
});

//Pode ser assim tbm ou usar function(){clicou();}
botao.addEventListener('click',clicou);

//-----------------------------------------------------------------------------------------

//MANIPULAÇÃO DE ELEMENTOS

function clicou() {
    const teste = document.querySelector('#id');
    // console.log(teste);
    // //Retorna os filhos
    // console.log(teste.children);
    // //Retorna o filho do filho
    // console.log(teste.children[0].children);

    //Manipular li
    const ul = teste.querySelector('ul');
    console.log(ul.innerHTML);
    //Alterar o li
    ul.innerHTML = '<li>Item alterado</li>';
    //Add no li
    ul.innerHTML = ul.innerHTML+'<li>Outro item alterado</li>';
    //Alterar o primeiro item
    ul.children[0].innerHTML='Item modificado';

    //Fora do html
    console.log(ul.outerHTML);

    //Moodificar o ul para strong
    //ul.outerHTML = '<strong>Alterado</strong>';

    //Adicionar conteúdo em um existente
    ul.children[0].append('(Alteração)');

    //DIFERENÇA entre append e innerHTML

    //Adicionar conteúdo em um existente
    //append SÓ FUNCIONA PARA TEXTO e ELEMENTOS
    // ul.children[0].append('(Alteração)');

    //Pega todo o conteúdo e vai substituir - Altera todo conteúdo
    //Interfere no processamento devido a quantidade
    // ul.children[0].innerHTML+='(Alteração)';

    //Adicionar um elemento e não o texto
    //Forma correta de adicionar um elemento
    //append sempre adiciona no final
    let newLi = document.createElement("li");
    newLi.innerText = "Item criado";
    //append e = appendChild
    ul.appendChild(newLi);

    //adicionar no começo só usar o prepend
    ul.prepend(newLi);

    //Add itens ao redor dos elementos
    //Depois do ul foi adicionado
    ul.after('texto depois da ul');
    ul.before("texto antes da ul")

    //Adicionar um elemento com after ou before
    const newButton = document.createElement('button');
    newButton.innerHTML = "Botão";
    ul.before(newButton);

    //Criar uma nova lista depois do ul
    let newUl = document.createElement('ul');
    //pode colocar aqui tbm o ul.after(newUl); e depois add os uls
    for(let i=1;i<5;i++){
        let newLi=document.createElement('li');
        newLi.innerHTML = 'item add ' + i;
        newUl.append(newLi);
    }
    ul.after(newUl);

//-----------------------------------------------------------------------------------------

//MANIPULAÇÃO ATRIBUTOS

    const input = document.querySelector('input');
    //pegar atributos de um elemento
    //getAttribute serve para pegar
    console.log(input.getAttribute('type'));
    console.log(input.getAttribute('placeholder'));
    console.log(input.getAttribute('name'));

    //Saber se existe este atributo
    //hasAttribute serve para saber
    if(input.hasAttribute('placeholder')){
        console.log('Tem SIM');
    }else{
        console.log('Tem NÃO');
    }

    //setAttribute serve para alterar caso exista
    input.setAttribute('placeholder', 'Placeholder Alterado');

    //Mostrar os caracteres da senha
    // if(input.getAttribute('type')==='text'){
    //     input.setAttribute('type', 'password');
    // }else{
    //     input.setAttribute('type', 'text');
    // }

    //Mudar o botao para mostrar e ocultar senha
    const botao = document.querySelector('.botao');
    if(input.getAttribute('type')==='text'){
        input.setAttribute('type', 'password');
        botao.innerHTML = 'Mostrar Senha';
    }else{
        input.setAttribute('type', 'text');
        botao.innerHTML = 'Ocultar senha';
    }

}
//------------------------------------------------------------------------

//MANIPULANDO CSS INLINE

function aperta(){
    const teste = document.querySelector('#id2');
    const li = teste.querySelector('li');

    //Mudar a cor do elemento
    li.style.backgroundColor = '#00f';
    li.style.fontSize = '20px';   

    
    //TRABALHANDO COM CLASSES
    const botao3 = document.querySelector('.botao3');
    //ver as classes
    console.log(botao3.classList);
    //Add outra classe
    botao3.classList.add('bt-bt');
    //Remover um classe
    botao3.classList.remove('bt-bt');
    //Verificar se eu tenho uma classe
    if(botao3.classList.contains('bt')){
        botao3.classList.remove('bt');
        botao3.classList.add('bt-add');
    }else{
        botao3.classList.add('bt');
        botao3.classList.remove('bt-add');
    }
    //Simplificar a verificação com o toggle - se não tiver ele adiciona se tiver ele remove
    botao3.classList.toggle('bt-add');
    //replace troca uma classe com outra: botao3.classList.replace('bt-add','bt-troca')
}

//---------------------------------------------------------------------------------

//EVENTOS DE TECLADO

//esse metodo é pelo html
// function apertou(){
//     console.log('APERTOU');
// }

// function segurou(){
//     console.log('SEGUROU');
// }

function soltou(e){
    // console.log('SOLTOU');

    //Aparece a tecla digitada
    //Mais detalhado
    console.log(e.code);

    //Mais simples
    console.log(e.key);

    //Saber quando aperta alguma coisa com o shift
    console.log(e.shiftKey);

    //CTRL e o ALT se foram apertados
    console.log(e.ctrlKey);
    console.log(e.altKey);
}

//Pelo javaScript
const eventos = document.querySelector('.eventos');
eventos.addEventListener('keyup',soltou);

//Colocar o evento na tela inteira é ó usar: document.addEventListener()
// document.addEventListener('keyup',soltou);


