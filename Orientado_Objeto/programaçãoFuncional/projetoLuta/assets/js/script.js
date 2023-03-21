const char = createKnight('Andre');
console.log(char);

const boss = createBoss();
console.log(boss);

stage.start(
    char,
    boss, 
    document.querySelector('#char'),
    document.querySelector('#monster')
)