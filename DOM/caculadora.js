let botao = document.querySelector('.botao');
botao.addEventListener('click', ()=>{
    calculadora();
    
});

function calculadora(){
    const num1 = Number(document.querySelector('.valor').value);
    const num2 = Number(document.querySelector('.valor2').value);
    const ope = document.querySelector('.operacao').value;

    if(ope==='+'){
        alert(num1+num2);
    }else if(ope==='-'){
        alert(num1-num2);
    }else if(ope==='*'){
        alert(num1*num2);
    }else if(ope==='/'){
        alert(num1/num2);
    }else{
        alert('Operação Invalida')
    }
    return
}