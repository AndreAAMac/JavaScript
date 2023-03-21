/*console.log('Hello World!');*/

//Váriaveis
let idade = 90
let nome = "André"

console.log("nome: " + nome +" e sua idade: " +idade)
console.log("-------------------------------------------------------------")


//Tipos de Dados
//String
let nome1 = "André"
//number
let numero = 2
let decimal = 2.2
//Booleano
let desligado = true
//Array
let lista = ["laranja", "Maçã",1]
//Objeto
let nomeCompleto = {nome:"Carlos", idade:"25"}

//Nome da Variável
console.log(typeof nome)
console.log(typeof decimal)
console.log(typeof nomeCompleto)
console.log("-------------------------------------------------------------")


//Exercício de variáveis#1
let carro = "Ferrari"
console.log(carro)

let bolo = 19.99
console.log(bolo)

let cidade = "São Paulo"
console.log("-------------------------------------------------------------")

//Ponto e vírgula
let sobre = "teste"; let acordo = "teste 2"
console.log(sobre, acordo)
console.log("-------------------------------------------------------------")

//let, const, var
//let pode modificar a variavel que sera exibida
//let só funciona no ambiente que ela foi criada
let ola = "mundo"
ola = "Mundial"
console.log(ola)

//var funciona igual ao let
//var funciona em qualquer contexto
var mundo = 'ola'
console.log(mundo)

//const a variavel imutavel
const meu = "pizza"
console.log(meu)
console.log("-------------------------------------------------------------")

//Operações em variáveis
let x=2;
x=x-8
console.log(x);

y=x*2;
console.log(y)

z=y/2;
console.log(z)

console.log("-------------------------------------------------------------")
//String e Template String
let string = "String";
let stringg = "String2";

let juntos = string +' '+stringg;
let Template_String = `${string} ${stringg}`;

console.log(juntos);
console.log(Template_String);

console.log("-------------------------------------------------------------")

console.log("Condicional If / else");
let valor = 90;

if (valor>=17){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}
console.log("-------------------------------------------------------------")

console.log("Condicional == e ===");
let valor2 = "20";

if (valor2==20){
    console.log("Deu Certo");
}else{
    console.log("Não deu Certo");
}

//Sempre usar ===
if (valor2===20){
    console.log("Deu Certo");
}else{
    console.log("Não deu Certo");
}
console.log("-------------------------------------------------------------")

console.log("Multi-condicionais (&& e ||)");
let valor3 = 18;

if(valor3 >= 18 && valor3 < 60){
    console.log("Você é Adulto");
}

if(valor3 >= 18 || valor3 < 60){
    console.log("Você é Adulto");
}

console.log("-------------------------------------------------------------")

console.log("Condicional Dupla (if else)");
if(valor3 <18){
    console.log("Você é Criança");
}else if(valor3 >= 18 && valor3 < 60){
    console.log("Você é Adulto");
}
else{
    console.log("Você é Idoso");
}
console.log("-------------------------------------------------------------")

console.log("Condicional Ternário");
let isMember = true;

//Condicional, Se der certo = 2 e se der errado = 10
//pode ser sem () que da certo tbm
let shipping = ((isMember) ? 2: 10);
console.log(isMember ? "Você é membro":"Você não é membro");
console.log("Frete "+shipping);
console.log("-------------------------------------------------------------")

console.log("Switch");
let profession = "Fiscal";

switch(profession){
    case "Fiscal":
        console.log("Sua camisa sera verde!")
    break;

    case "Bombeiro":
        console.log("Sua camisa sera vermelha!")
    break;

    case "Policial":
        console.log("Sua camisa sera azul!")
    break;

    default:
        console.log("Nenhuma das opções acima")
    break;
}