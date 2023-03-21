// -Programação Orientada a Objetos (POO - OOP)
// -Programação Procedural - sequencia de códigos
// -Programação Funcional (PF - FP) (Function Programming Paradigma)

// -CLASSES

class Person{

    //Posso colocar o age aqui - Criar uma variável para toda classe
    //age = 0;

    //Contador de passos - AÇÃO
    steps = 0;
    idade = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //ACTION - AÇÕES
    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if (typeof newAge == 'number'){
            this.idade = newAge;
        }else{
            console.log('ERRO - Só aceita número')
        }
    }
}

// Instância classe//Objeto
console.log(``);
console.log("----------Instância------------");

let p1 = new Person("André", 32);
let p2 = new Person("Augusto", 30);
let p3 = new Person("Almeida", 33);

//E informar o age aqui
//p1.age = 30;
//console.log(p1.age);

console.log(p1.name);
console.log(p2.age);
console.log(p3);

//AÇÃO
console.log(``);
console.log("-------AÇÃO--------");

p1.takeAStep();
p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);

p1.setAge(20);
console.log(`${p1.name} tem ${p1.idade} anos`);

p2.setAge('1')
console.log(`${p2.name} tem ${p2.idade} anos`);

//GETTER (pegar) e SETTER (colocar)
class Pessoa{
    //Sempre usa _nomeDaVariavel para informar que é getter
    _age = 0;
    constructor(primeiroNome, sobreNome){
        this.primeiroNome = primeiroNome;
        this.sobreNome = sobreNome;
    }
    get nomeCompleto(){
        return `${this.primeiroNome} ${this.sobreNome}`;
    }

    get age1(){
        return this._age;
    }

    set age1(x){
        if (typeof x == 'number'){
            this._age = x;
        }
        
    }
}
console.log(``);
console.log('-------GETTER (pegar) e SETTER (colocar)-------');

let p4 = new Pessoa("Cintia",'Carla');
console.log(`${p4.primeiroNome} tem ${p4.age1} anos`);
console.log(`${p4.nomeCompleto} tem ${p4.age1} anos`);

//Set
p4.age1 = 31;
console.log(`${p4.nomeCompleto} tem ${p4.age1} anos`);


//HERANÇA
console.log(``);
console.log('-------HERANÇA-------');

class Aluno{
    age3 = 0;
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name}, Seja Bem Vindo`);
    }
}

class Estudante extends Aluno{
    constructor(name, id){
        //SUPER se refere a class que esta extendendo
        super(name);
        this.id = id;
    }
    //Sobreescrever a função
    // sayHi(){
    //     console.log(`${this.name}, Bye!!!`);
    // }

    // Executar a função da class Aluno
    sayHi(){
        super.sayHi();
    }
}
let est = new Estudante(`Alcimiro`,1);
est.age3 = 41;
est.sayHi();
console.log(`${est.name} tem ${est.age3} anos e matrícula ${est.id}`);

//Variável/Método estático
console.log(``);
console.log('-------Variável/Método estático-------');

class Car{
    // Esta relacionada com a class Car porem
    // Não esta associada com o objeto ou estancia que criar
    // O carro que criar não vai ter 4 rodas, mas um carro tera 4 rodas
    static roda = 4;

    old = 0;

    constructor(marca){
        this.marca = marca;
    }
    siHay(){
        // Errado
        console.log(`Carro ${this.marca} tem ${this.roda} rodas`);
        // Certo
        console.log(`Carro ${this.marca} tem ${Car.roda} rodas`);
    }
}

let car1 = new Car(`BMW`);
car1.siHay();

// Não se altera um método static
Car.roda = 5;
console.log(`Carro ${car1.marca} tem ${Car.roda} rodas`);

//FACTORY
console.log(``);
console.log('------FACTORY--------');

//Conceito de criar coisas

class People{
    age4 = 0;
    constructor(name){
        this.name=name;
    }
}
function createPeople(name,age4){
    let p = new People(name);
    p.age4 = age4;
    return p;
}
let people1 = createPeople('André',35);
console.log(`${people1.name} tem ${people1.age4} anos.`);

// -FUNÇÕES/OBJETOS

