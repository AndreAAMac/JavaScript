//Promise = Promessa 
function clicou(){
    //Tudo que tem promise é assincrona
    //fazer uma requisição
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://jsonplaceholder.typicode.com/pos2ts')//Erro
    //resposta eu transformo em json
        .then((response)=>{
            //Status que pode ver no site do mozilla na documentação
            console.log(`Status: ${response.status}`);
            return response.json();
    })
    //rodo uma alert com o título da requisição
        .then((json)=>{
            alert(`Título do primeiro post: ${json[0].title}`);
    })
    //recebe um callback para ser executado quando der um problema durante a requisição
        .catch((error)=>{
            alert('Deu problema!');
            console.log(error);
        })
        //Sempre usa no final e ele executa quando deu certo e quando deu errado também
        .finally(()=>{
            alert("Acabou tudo!")
        })
}

//Por padrão é o method GET
//GET - pegar
//POST - mandando, inserir
//PUT - alterar informação que ja existe
//DELETE - deletar
