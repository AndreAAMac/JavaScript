function clicou(){
    // alert('clicouuu');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
        // console.log('Executou o CALLBACK da requisição');
        // console.log(response);
        // console.log(response.body);

        //converter a resposta em objeto
            return response.json();
    })
    //mostra o objeto
    .then((json)=>{
        // console.log(json);
        //mostrar o primeiro posts
        // console.log(json[0]);
        //mostrar o titulo
        // console.log(json[0].title);
        //mostrar para o usuário
        alert(`Título do primeiro post: ${json[0].title}`);
    })
}

document.querySelector('#botao').addEventListener('click', clicou);

//Promise = Promessa 
function clicou(){
    //Tudo que tem promise é assincrona
    //fazer uma requisição
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
    //resposta eu transformo em json
        req.then((response)=>{
            return response.json();
    })
    //rodo uma alert com o título da requisição
        .then((json)=>{
            alert(`Título do primeiro post: ${json[0].title}`);
    });
    //Sincrona e Assincrona
    alert('Opa, CLICLOU');

}

document.querySelector('#botao').addEventListener('click', clicou);