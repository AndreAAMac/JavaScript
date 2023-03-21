//let clicou = async () => {}
//Usando o async e await nao precisa usa a parte comentada e é chamado primeiro que o alert clicou
//await força a esperar a requisição
//Hoje so se usa este jeito
async function clicou(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Título do primeiro post: ${json[0].title}`);     
        // .then((response)=>{
        // console.log(`Status: ${response.status}`);
        //     return response.json();
        // })
        // .then((json)=>{
        //     alert(`Título do primeiro post: ${json[0].title}`);
        // })
        // .catch((error)=>{
        //     alert('Deu problema!');
        //     console.log(error);
        // })
    alert("Clicou");

}

//Método POST
async function inserir(){
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        });
    let json = await response.json(); 
    console.log(json); 
} 
//     .then((response)=>{
//         return response.json();
//     })
//     .then((json)=>{
//         console.log(json);
//     })
// }

document.querySelector('.botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', clicou);