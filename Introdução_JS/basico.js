//Introdução a funções
function gravidade(){
    console.log("A gravidade é:");
    console.log(9.8);
}
gravidade()

console.log("---------------------------------------------------")

//Outra função
function somar(n1, n2){
    resultado = n1+n2;
    console.log("Resultado: "+resultado);
}
somar(4,5);

console.log("---------------------------------------------------")

//Retorno da função
function nomeCompleto(nome, sobrenome){
    //função acaba no momento que se utiliza return
    return `${nome} ${sobrenome}`;
}
let completo = nomeCompleto("André", "Augusto");
console.log(completo);

console.log("---------------------------------------------------")

//Função com retorno condicional
function maiorIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}
let verificacao = maiorIdade(14);
console.log(verificacao);

console.log("---------------------------------------------------")

//Arrow Function

// function conta(x,y){
//     return x+y;
// }
// console.log(conta(2,2));

//MESMA COISA QUE O DE CIMA
// const conta = (x,y) =>{
//     return x+y;
// }
// console.log(conta(2,2));

//RESUMIR MAIS QUANDO TIVER UMA LINHA SÓ
const conta = (x,y) => x+y;
console.log(conta(2,2));

//QUANDO TEM UM PARAMETRO SOMENTE
const teste = sob =>'Augusto '+sob;
console.log(teste("André"))

console.log("---------------------------------------------------")

//Variáveis dentro de funções
//Assim não funciona
// function add(){ 
    //escopo local tem prioridade em cima do escopo global se a variável estiver o mesmo nome
//     let count = 0;   
//     count++;
// }

//escopo global
let count = 0;
function add(){    
    count++;
}
add();//1
add();//2
console.log(count);

console.log("---------------------------------------------------")

//Funções dentro de funções
function square(x){
    return x*x;
}
console.log(square(2));

function addSquares(a,b){
    return square(a) + square(b);
}
//raiz de 2 =4 e raiz de 3 = 9 === 13
console.log(addSquares(2,3));

//pode ser assim tbm
function addQuadrado(a,b){
    function quadrado(x){
        return x*x;
    }
    let sqrA = quadrado(a);
    let sqrB = quadrado(b);
    return sqrA+sqrB;
}
console.log(addQuadrado(2,3))

//conselho - função dentro de outra função é melhor criar como arrow funct ( const square = (x)=>x*x; )
function addQuadrad(a,b){
    const quadrad = (x)=>x*x;

    let sqrA = quadrad(a);
    let sqrB = quadrad(b);
    return sqrA+sqrB;
}
console.log(addQuadrad(2,3))

console.log("---------------------------------------------------")

//Introdução a Array
let colors = ['red','green','blue'];
console.log(colors)
console.log(colors[0])
console.log(colors[1])

let idades = [18,21,33];
console.log(idades);

//lista dentro de lista
let listaJuntas = [colors, idades];
console.log(listaJuntas);
console.log(listaJuntas[1][0]);

console.log("---------------------------------------------------")

//Operações básicas de array
let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
//adicionar um item no array, porem não faça assim
ingredientes[5] = 'coco';
console.log(`Total de ingredientes: ${ingredientes.length}`)
console.log(ingredientes);

//faça assim
ingredientes.push('granulado');
console.log(ingredientes);
//Remover o ultimo item do array
ingredientes.pop();
console.log(ingredientes);
//Remove o primeiro item do array
ingredientes.shift();
console.log(ingredientes);


console.log("---------------------------------------------------")

//Objetos
let personagem = {
    nome:'Andre',
    idade:32,
    Pais:'Brasil',
    caracteristicas:{
        stamina:22,
        forca:10,
        mana:15
    }
};
console.log(personagem);
console.log(personagem.nome);
console.log(personagem.caracteristicas.stamina);

//Trocar uma propriedade
personagem.nome = 'Augusto';
console.log(personagem.nome);

personagem.caracteristicas.forca +=5;
console.log(`Força = ${personagem.caracteristicas.forca}`)

let persona = {
    nome:'Augusto',
    profissao:"enfermeiro",
    carros:[
        {
            modelo:'Audi',
            cor:'Branco'
        },{
            modelo:'BMW',
            cor:'Preto'
        }
    ]
};
console.log(persona.carros[0].cor);

console.log('-----------------------------------------------------------------------')

//Função dentro de objeto
let person = {
    nome:'Andre',
    sobrenome:'Machado',
    nomeComplite: function(){
        return this.nome +' '+this.sobrenome;
    }
};
console.log(person.nomeComplite());
//arrow function não tem acesso ao this

console.log('-----------------------------------------------------------------------')

//LOOP e FOR
//inicio - condicional - transformar
for(let n=1;     n <= 10   ;  n++){
    console.log(n);
}

console.log('-----------------------------------------------------------------------')

//Loop em um array
let arco = ['preto', 'branco','violeta','azul','vermelho'];
for(let n=0; n<arco.length; n++){
        console.log(arco[n]);
}

//Jeito mais fácil
//O laço for…in é responsável por percorrer pelas propriedades enumeradas de um objeto, com base na ordem de inserção
for(let i in arco){
    console.log(`Cores: ${arco[i]}`);
}

//Outra forma
//O for…of percorre pelos valores de objetos que sejam iterativos, como por exemplo um Array, Map, Set
for(let cor of arco){
    console.log(`Tons: ${cor}`);
}

let cores = [
    {nome:'preto',qt:10},
    {nome:'azul',qt:8},
    {nome:'vermelho',qt:15}
]
for (let i in cores){
    console.log(cores[i].nome);
}
//Tudo maisculo
for (let i in cores){
    console.log(cores[i].nome.toUpperCase());
}
for (let cor of cores){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

console.log('-----------------------------------------------------------------------')

//loop while
let n = 0;
while(n < 10){
    console.log(`Se o numero for menor q 10 execute ${n}`);
    n++;
}


console.log('-----------------------------------------------------------------------')

//Funções de array
let fruits = ['Maça','Pera','Uva','Abacaxi'];
fruits.push('Morango')
console.log(fruits);
fruits.pop();
console.log(fruits.length);
fruits.shift();
console.log(fruits);
//Separa as strings
console.log(fruits.join(' '));
console.log(fruits.join(','));
//Alterar valores especificos - substituir
fruits[0] = 'Banana'
console.log(fruits);
fruits[fruits.length - 1] = 'Banana-verde'
console.log(fruits);

console.log('-----------------------------------------------------------------------')

//Ordenação de array
let ordernaAlfabeto = ['b','f','a','w','c','e']
console.log(ordernaAlfabeto.sort());
//Ordem descrescente tem que combinar o sort() e reverse()
console.log(ordernaAlfabeto.reverse());

//Ordenação pelo ano
let moto = [
    {modelo: 'Kavazaki', year:2011},
    {modelo: 'BMW', year:2001},
    {modelo: 'HONDA', year:2021}
];
// moto.sort((a,b)=>{
//     if(a.year>b.year){
//         return 1;
//     }else if(a.year<b.year){
//         return -1;
//     }else{
//         return 0;
//     }
// });
//facilitar
// moto.sort((a,b)=>{
//     return a.year - b.year;
// });
//Simplificar MAIS
moto.sort((a,b)=> a.year-b.year);
console.log(moto);

console.log('-----------------------------------------------------------------------')

//Iteração de array 1
let nomes = ['Andre','Augusto','Cintia','Carla','Machado','Almeida'];
//Salvo em outro lugar
let filtroNomes = nomes.filter((item)=> item.length > 5);
//modelo simplificado
    // if(item.length>4){
    //     return true;
    // }else{
    //     return false;
    // }
console.log(filtroNomes);

//retorna true quando todos os item do array satisfaz a condição
let maioresNomes = nomes.every((value)=>value.length>6);
if(maioresNomes){
    console.log('Todos são maiores que 6');
}else{
    console.log("Não são todos maiores que 6");
}

//Somente alguns são maiores que 6
let maioreNomes = nomes.some((value)=>value.length>6);
if(maioreNomes){
    console.log('Algum item é maior que 6');
}else{
    console.log("Nenhum item é maior que 6");
}

//Achar um item no array
if(nomes.includes('Andre')){
    console.log(`Achou o nome`);
}else{
    console.log('Não achou o nome');
}