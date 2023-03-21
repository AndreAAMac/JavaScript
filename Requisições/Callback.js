/*
O que é CALLBACK?

Se aplica a todos os EVENTOS e REQ

call back - ligar de volta

Criar um função e executar na hora correta/ executada no futuro

Exemplo
função para quando clicar no botão:
    -requisição a url x;
    -tá aqui o callback para quando você tiver a resposta;
    --callbackMaroto;
*/
document.querySelector('#botao')
    .addEventListener('click', ()=>{
        alert('Clicou no botão');
});