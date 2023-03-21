//Log
let log = new Log(document.querySelector('.log'));

let char = new Knight('Andre');
//let char = new Socerer('Augusto');
// console.log(char.name);
// console.log(char.life);
// console.log(char.attack);

//let monster = new LittleMonster();
let monster = new BigMonster();
// console.log(monster.name);
// console.log(monster.life);
// console.log(monster.attack);



//criar o stage
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();





