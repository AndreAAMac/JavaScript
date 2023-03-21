//Criar uma pessoa com Funcional
//Objeto
function createPerson(name, lastName, age){
    return{
        name,
        lastName, 
        age,
        //Estanciar
        getFullName() {
            return `${this.name} ${this.lastName}`;
        }
        
    }
}

let person1 = createPerson('Andre','Augusto',32);
console.log(person1.name);
console.log(person1.getFullName());

//-------------------------------------------------------------

let person ={
    name: 'Andre',
    lastName: 'Augusto',
    age:90,
    getFullName() {
        return `${this.name} ${this.lastName}`;
    },//Obj não tem um Construtor mas pode emular desta forma
    start(){
        console.log('Iniciou')
    }
}
//Iniciar primeiro sem o construtor
person.start();
console.log(person.getFullName());

//------------------------------------------------------------
//Heranças
const defaultUser ={
    name: '',
    email:'',
    level: 1
}

let user1 = {
    //Clonar o objeto, caso nao tenha ele coloca e caso coloque igual substitui
    ...defaultUser,
    name: 'Andre',
    email: 'andre@gmail.com'
}

console.log(user1);

let adm1 = {
    ...defaultUser,
    name: 'Adm',
    email: 'andreAdm@gmail.com',
    level: 2
}

console.log(adm1);