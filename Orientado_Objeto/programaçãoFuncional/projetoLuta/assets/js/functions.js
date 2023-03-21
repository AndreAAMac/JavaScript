//Personagem padrão
const deafultCharacter = {
    name:'',
    life: 1,
    maxLife:1,
    attack:0,
    defense: 0
}

//Gerreiro
const createKnight = (name) => {
    return{
        ...deafultCharacter,
        name,
        life: 100,
        maxLife:100,
        attack:10,
        defense: 8 
    }
}

//Mago
const createSocerer = (name) => {
    return{
        ...deafultCharacter,
        name,
        life: 50,
        maxLife:50,
        attack:14,
        defense: 3 
    }
}

//Monstro 
const createMonster = () => {
    return{
        ...deafultCharacter,
        name: 'Monstro',
        life: 40,
        maxLife:40,
        attack:4,
        defense: 4 
    }
}

//Boss
const createBoss = () => {
    return{
        ...deafultCharacter,
        name: 'BOSS',
        life: 120,
        maxLife:120,
        attack:16,
        defense: 6 
    }
}

//Criar o cenário
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2,fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update();
    },
    update(){
        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP`;
        //Vida
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife)*100;
        //barra de vida
        this.fighter1El.querySelector('.bar').style.width=`${f1Pct}%`;

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP`;
        //Vida
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife)*100;
        //barra de vida
        this.fighter2El.querySelector('.bar').style.width=`${f2Pct}%`;
    },
    doAttack(attacking, attacked){
        //Se alguém estiver com 0 de vida, acaba
        if(attacking.life <=0 || attacked.life <=0){
            log.addMessage('Morreuuu');
            return;
        }
        //Gerar ataque e defesa aleatórios
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);
        
        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            //verificar se a vida não é menor que zero
            attacked.life = attacked.life < 0 ? 0 :attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
        }else{
            log.addMessage(`${attacked.name} conseguiu defender`);
        }
        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const listEl = document.querySelector('.log');
        listEl.innerHTML = '';

        for(let i in this.list) { 
            listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}